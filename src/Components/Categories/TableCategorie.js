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
import { debouncer } from '../../utils/debouncer';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

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
