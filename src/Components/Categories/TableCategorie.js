import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  TableCaption, Text, Button, Box, Container, Stack
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
      <Container maxW='100%'>
        <Box mb={5}>
          <Text fontSize='6xl'>Backoffice de Categorías</Text>
          <Button colorScheme='green'>
            <Link to="/backoffice/Categorías/create">Crear nueva categoría</Link>
          </Button>
        </Box>
        <Table variant="simple">
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
              return (
                <Tr key={categories.key}>
                  <Td>{categorie.name}</Td>
                  <Td>{new Date(categorie.created_at).toLocaleDateString('es-ES')}</Td>
                  <Td>{categorie.id}</Td>
                  <Td>
                    <Stack spacing={2}>
                      <Box>
                        <Button colorScheme='blue'>
                          <AiFillEdit />
                        </Button>
                      </Box>
                      <Box>
                        <Button colorScheme='red'>
                          <AiFillDelete />
                        </Button>
                      </Box>
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
