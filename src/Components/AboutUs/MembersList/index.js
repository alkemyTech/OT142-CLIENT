/* eslint-disable*/
import React, { useEffect } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
} from "@chakra-ui/react";
import Spinner from "../../Spinner/index";
import { showAlertErr } from "../../../Services/AlertServicie/AlertServicie";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMembers,
  getMembersList,
} from "../../../app/features/MembersSlice";
const MembersList = () => {
  const dispatch = useDispatch();
  const members = useSelector(getAllMembers);

  const memberStatus = useSelector((state) => state.members.status);

  useEffect(() => {
    if (memberStatus === "idle") {
      dispatch(getMembersList());
    }
  }, [memberStatus, dispatch]);

  return (
    <>
      <Table variant="simple" size="md" colorScheme="telegram">
        <TableCaption placement="top">Listado de Miembros</TableCaption>
        <Thead style={{ backgroundColor: "#EDF2F7" }}>
          <Tr>
            <Th>Nombre</Th>
            <Th>Imagen</Th>
            <Th>Descripción</Th>
            <Th>Facebook</Th>
            <Th>Linkedin</Th>
          </Tr>
        </Thead>
        {memberStatus === "loading" && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        <Tbody>
          {members ? (
            members.map((member, i) => (
              <Tr key={i}>
                <Td>{member.name}</Td>
                <Td>
                  <Image
                    boxSize="110px"
                    objectFit="cover"
                    src={member.image}
                    alt={member.name}
                  />
                </Td>
                <Td>{member.description}</Td>
                <Td>{member.facebookUrl}</Td>
                <Td>{member.linkedinUrl}</Td>
              </Tr>
            ))
          ) : (
            <Td>Sin miembros</Td>
          )}
          ,
        </Tbody>
      </Table>
    </>
  );
};

export default MembersList;
