import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableCaption, Stack, Text, Button
} from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { getAllCategories } from '../../app/features/ReducerCategories';
import { useDispatch, useSelector } from 'react-redux';

const TableCategorie = () => {
  const { list: categories } = useSelector((state) => state.categories);
  console.log(categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <>
      <Stack>
        <Stack style={{ display: ' flex', alignItems: ' center' }}>
          <Text fontSize='6xl'>Backoffice de Categorías</Text>
          <Stack>
            <Button colorScheme='green'>
              <Link to="/backoffice/Categorías/create">Crear nueva categoría</Link>
            </Button>
          </Stack>
        </Stack>
        <Table className="Table" size="lg" variant="striped" colorScheme="teal">
          <TableCaption>Screen Listado de Categorías (backoffice)</TableCaption>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Crear</Th>
              <Th isNumeric>Id</Th>
              <Th>Acción</Th>
            </Tr>
          </Thead>

          {!categories
            ? 'cargando...'
            : categories.map((categorie) => {
              return (
                  <Tr key={categories.key}>
                    <Td>{categorie.name}</Td>
                    <Td>{categorie.createdAt}</Td>
                    <Td isNumeric>{categorie.id}</Td>
                    <Td>
                      <Button colorScheme='blue'>
                        <AiFillEdit />
                      </Button>
                      <Button colorScheme='red'>
                        <AiFillDelete />
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

// import React from "react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
// } from "@chakra-ui/react";
// import { Stack, Heading } from "@chakra-ui/react";
// import styleCS from "../Categories/styleCS.css";
// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// const TableCategorie = () => {
//   const categorieData = [
//     {
//       name: "Nico",
//       createdAt: "create1",
//       id: 1,
//     },
//     {
//       name: "Santi",
//       createdAt: "create2",
//       id: 2,
//     },
//     {
//       name: "Gian",
//       createdAt: "create3",
//       id: 3,
//     },
//     {
//       name: "Meli",
//       createdAt: "create4",
//       id: 4,
//     },
//   ];

//   console.log(categorieData);
//   return (
//     <>
//       <Stack>
//         <Stack style={{ display: " flex", alignItems: " center" }}>
//           <Heading as="h4" size="md">
//             Listado de Categorías
//           </Heading>

//           <Stack>
//             <Button variant="outline" colorScheme="teal" size="xs">
//               <Link to="/backoffice/Categorías/create">Crear Categorias</Link>
//             </Button>
//           </Stack>
//         </Stack>
//         <Table className="Table" size="lg" variant="striped" colorScheme="teal">
//           <TableCaption>Screen Listado de Categorías (backoffice)</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>Name</Th>
//               <Th>Create4</Th>
//               <Th isNumeric>Id</Th>
//               <Th>Acciones</Th>
//             </Tr>
//           </Thead>

//           {!categorieData
//             ? "cargando..."
//             : categorieData.map((categorie) => {
//                 return (
//                   <Tr>
//                     {categorieData.key}
//                     <Td>{categorie.name}</Td>
//                     <Td>{categorie.createdAt}</Td>
//                     <Td isNumeric>{categorie.id}</Td>
//                     <Td>
//                       <Button variant="outline" colorScheme="teal" size="xs">
//                         Eliminar
//                       </Button>
//                       <Button variant="outline" colorScheme="teal" size="xs">
//                         Editar
//                       </Button>
//                     </Td>
//                   </Tr>
//                 );
//               })}
//         </Table>
//       </Stack>
//     </>
//   );
// };

// export default TableCategorie;
