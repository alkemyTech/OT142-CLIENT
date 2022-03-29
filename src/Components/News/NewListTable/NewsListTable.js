import React from 'react';
import { Link } from 'react-router-dom';
import {
  VStack,
  Container,
  Heading,
  Flex,
  Box,
  Spacer,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  FormControl,
  Input
} from '@chakra-ui/react';

const handleChange = (e) => {
  if (e.target.value.length > 3) {
    console.log(e.target.value);
  }
};

const NewsListTable = ({ data, handleDeleteNews }) => {
  return (
        <VStack>
            <Container maxW='container.lg'>
                <Flex margin={10}>
                    <Box p='2'>
                        <Heading size='xl'>Listado de Novedades</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/backoffice/news/create">
                            <Button colorScheme='teal' mr='4'>
                                Crear Novedad
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                <Flex>
                  <FormControl>
                    <Input
                      m={'20px'}
                      onChange={handleChange}
                      bg='white'
                      type='search'
                      placeholder='Buscar novedad' />
                    </FormControl>
                  </Flex>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Imagen</Th>
                            <Th>Creado en</Th>
                            <Th>Editar</Th>
                            <Th>Eliminar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((tableContent) => {
                          return (
                                <Tr key={tableContent.id}>
                                    <Td>{tableContent.name}</Td>
                                    <Td>{tableContent.image}</Td>
                                    <Td>{tableContent.created_at}</Td>
                                    <Td>
                                        <Link to={`news/${tableContent.id}`}>
                                            <Button colorScheme='blue'>Editar</Button>
                                        </Link>

                                    </Td>
                                    <Td>
                                        <Button onClick={() => handleDeleteNews('news', tableContent.id)} colorScheme='red'>Eliminar</Button>
                                    </Td>
                                </Tr>
                          );
                        })}
                    </Tbody>
                </Table>
            </Container>
        </VStack>
  );
};

export default NewsListTable;
