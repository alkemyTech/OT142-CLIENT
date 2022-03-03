import React from "react";
import MembersTable from "./MembersTable";
import { getMembers } from "../../Services/privateApiService";

const Members = () => {
  return <MembersTable members={getMembers} />;
};

export default Members;
