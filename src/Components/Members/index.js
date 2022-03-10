<<<<<<< HEAD
import React, { useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  Center,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
=======
import React, { useState, useEffect, useCallback } from "react";
import MembersTable from "./MembersTable";
import { getMembers } from "../../Services/membersService";
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a

const Members = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMembers().then((response) => setMembers(response.data));
  }, []);

<<<<<<< HEAD

  const tableHeads = ["Foto de Perfil", "Nombre", "Administrar"];

  return (
    <Box p="1em">
      <Box>
        <Center>
          <Link to="/backoffice/members/create">
            <Button>Añadir Miembros</Button>
          </Link>
        </Center>
      </Box>
      <Center>
        <Box p="1em">
          <Table variant="simple">
            <Thead>
              <Tr>
                {tableHeads.map((head) => {
                  return (
                    <Th key={Math.random()}>
                      <Center>{head}</Center>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {_members.map((member) => {
                return (
                  <Tr key={member.id}>
                    <Td>
                      <img src={member.image} alt={member.name} />
                    </Td>
                    <Td>
                      <Center>
                        <Text size="xs">{member.name}</Text>
                      </Center>
                    </Td>
                    <Td mr="1em">
                      <Box p="0.5em">
                        <Button
                          colorScheme="blue"
                          width="100%"
                          p="0.5em"
                          size="xs"
                        >
                          Editar
                        </Button>
                      </Box>
                      <Box p="0.5em">
                        <Button
                          colorScheme="red"
                          width="100%"
                          mr="0.5em"
                          size="xs"
                        >
                          Eliminar
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Center>
    </Box>
  );
=======
  return <MembersTable members={members} />;
>>>>>>> b6305fcb037f58a8e33fb38971b1566cefb5729a
};

export default Members;
