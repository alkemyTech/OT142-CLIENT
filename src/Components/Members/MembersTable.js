import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Center,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Members = ({ members }) => {
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
              {members.map((member) => {
                return (
                  <Tr key={member.id}>
                    <Td>
                      <Center>
                        <Image
                          align={"center"}
                          boxSize="3em"
                          src={member.image}
                          alt={member.name}
                        />
                      </Center>
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
};

export default Members;
