import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
<<<<<<< HEAD
  TableCaption, Stack, Heading, Button, Flex, FormControl, Input
=======
  TableCaption, Text, Button, Box, Container, Stack
>>>>>>> 2ae9c5afd2f197fc65ad33ceff56145bd548dde8
} from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { getAllCategories, getCategorieByName, getCategoriesList } from '../../app/features/ReducerCategories';
import { useDispatch, useSelector } from 'react-redux';

const TableCategorie = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  console.log(categories);

  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      dispatch(getCategorieByName(e.target.value));
    } else {
      dispatch(getCategoriesList());
    }
  };

  useEffect(() => {
    dispatch(getCategoriesList());
  }, [dispatch]);

  return (
    <>
<<<<<<< HEAD
      <Stack>
        <Stack style={{ display: ' flex', alignItems: ' center' }}>
          <Heading as="h4" size="md">
            Listado de Categorías
          </Heading>

          <Stack>
            <Button variant="outline" colorScheme="teal" size="xs">
              <Link to="/backoffice/categories/create">Crear Categorías</Link>
            </Button>
            <Flex mt='2'>
              <FormControl>
                <Input
                  onChange={handleChange}
                  bg='white'
                  type='search'
                  placeholder='Buscar categoria' />
              </FormControl>
            </Flex>
          </Stack>
        </Stack>
        <Table className="Table" size="lg" variant="striped" colorScheme="teal">
=======
      <Container maxW='100%'>
      <Box mb={5}>
          <Text fontSize='6xl'>Backoffice de Categorías</Text>
            <Button colorScheme='green'>
              <Link to="/backoffice/Categorías/create">Crear nueva categoría</Link>
            </Button>
        </Box>
        <Table variant="simple">
>>>>>>> 2ae9c5afd2f197fc65ad33ceff56145bd548dde8
          <TableCaption>Screen Listado de Categorías (backoffice)</TableCaption>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Fecha de Creación</Th>
              <Th>Id</Th>
              <Th>Acción</Th>
            </Tr>
          </Thead>

          {!categories
            ? 'cargando...'
            : categories.map((categorie) => {
              console.log(categorie);
              return (
                  <Tr key={categorie.id}>
                    <Td>{categorie.name}</Td>
                    <Td>{categorie.createdAt}</Td>
                    <Td>{categorie.id}</Td>
                    <Td>
                    <Stack spacing={2}>
                    <Link>
                      <Button colorScheme='blue'>
                        <AiFillEdit />
                      </Button>
                    </Link>
                    <Link>
                      <Button colorScheme='red'>
                        <AiFillDelete />
                      </Button>
                    </Link>
                    </Stack>
                    </Td>
                  </Tr>
              );
            })}
        </Table>
      </Container>
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
