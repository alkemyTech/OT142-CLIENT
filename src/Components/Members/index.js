import React, { useState, useEffect } from "react";
import MembersTable from "./MembersTable";
import { getMembers } from "../../Services/membersService";
import { getAllMembers } from "../../app/features/membersSlice";
import { useDispatch, useSelector } from "react-redux";

const Members = () => {
  const [data, setData] = useState(["foo"]);

  const dispatch = useDispatch();
  const { membersSlice } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  useEffect(() => {
    setData(membersSlice.members);
    console.log(`members: ${data}`);
  }, [membersSlice]);

  return <MembersTable members={data} />;
};

export default Members;
