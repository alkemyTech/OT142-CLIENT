import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Box,
  TableCaption, Stack, Heading, Button, Flex, FormControl, Input
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getAllCategories, getCategorieByName, getCategoriesList } from '../../app/features/ReducerCategories';
import { useDispatch, useSelector } from 'react-redux';
import { debouncer } from '../../utils/debouncer';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const TableCategorie = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

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
                  onChange={debouncer(handleChange)}
                  bg='white'
                  type='search'
                  placeholder='Buscar categoria' />
              </FormControl>
            </Flex>
          </Stack>
        </Stack>
        <Table className="Table" size="lg" variant="striped" colorScheme="teal">
          <TableCaption>Screen Listado de Categorías (backoffice)</TableCaption>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Crear</Th>
              <Th isNumeric>Id</Th>
              <Th>Acciones</Th>
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
      </Stack>
    </>
  );
};

export default TableCategorie;
