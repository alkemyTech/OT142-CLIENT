import React, { useState, useEffect } from "react";
import MembersTable from "./MembersTable";
import { getMembers } from "../../Services/membersService";

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getMembers().then((response) => {
      console.log(response);
      setMembers(response.data);
    });
  }, []);

  return <MembersTable members={members} />;
};

export default Members;
