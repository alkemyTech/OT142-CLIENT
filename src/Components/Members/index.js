import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Criterios de aceptación: Al ingresar a la ruta /backoffice/members,
// mostrará el listado de Miembros de la ONG para el usuario administrador en una tabla.
//El mismo tendrá datos mockeados para representar los datos, que posteriormente se obtendrán desde el endpoint de listado de Miembros.
//La tabla mostará los campos name y photo,
// y las acciones para eliminar y editar. En la sección superior, mostrará un componente <Link> que
// redirigirá a la ruta /backoffice/members/create.

const Members = ({ members }) => {
  return (
    <Box p="1em">
      <Link to="/backoffice/members/create">Add Members</Link>
      <Center>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
        </Table>
      </Center>
    </Box>
  );
};

export default Members;
