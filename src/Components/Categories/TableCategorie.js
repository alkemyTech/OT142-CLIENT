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
} from "@chakra-ui/react";
import { Stack, Heading } from "@chakra-ui/react";
import styleCS from "../Categories/styleCS.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TableCategorie = () => {
  const categorieData = [
    {
      name: "Nico",
      createdAt: "create1",
      id: 1,
    },
    {
      name: "Santi",
      createdAt: "create2",
      id: 2,
    },
    {
      name: "Gian",
      createdAt: "create3",
      id: 3,
    },
    {
      name: "Meli",
      createdAt: "create4",
      id: 4,
    },
  ];

  console.log(categorieData);
  return (
    <>
      <Stack>
        <Stack style={{ display: " flex", alignItems: " center" }}>
          <Heading as="h4" size="md">
            Listado de Categorías
          </Heading>

          <Stack>
            <Button variant="outline" colorScheme="teal" size="xs">
              <Link to="/backoffice/Categorías/create">Crear Categorias</Link>
            </Button>
          </Stack>
        </Stack>
        <Table className="Table" size="lg" variant="striped" colorScheme="teal">
          <TableCaption>Screen Listado de Categorías (backoffice)</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Create4</Th>
              <Th isNumeric>Id</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>

          {!categorieData
            ? "cargando..."
            : categorieData.map((categorie) => {
                return (
                  <Tr>
                    {categorieData.key}
                    <Td>{categorie.name}</Td>
                    <Td>{categorie.createdAt}</Td>
                    <Td isNumeric>{categorie.id}</Td>
                    <Td>
                      <Button variant="outline" colorScheme="teal" size="xs">
                        Eliminar
                      </Button>
                      <Button variant="outline" colorScheme="teal" size="xs">
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
        </Table>
      </Stack>
    </>
  );
};

export default TableCategorie;
