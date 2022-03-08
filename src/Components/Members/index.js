import React, { useState, useEffect, useCallback } from "react";
import MembersTable from "./MembersTable";
import { getMembers } from "../../Services/membersService";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMembers().then((response) => setMembers(response.data));
  }, []);

  return <MembersTable members={members} />;
};

export default Members;
