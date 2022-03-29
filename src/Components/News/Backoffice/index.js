import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Spinner,
  Center
} from '@chakra-ui/react';
import TrTable from '../../../utils/TrTable';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNovedad, deleteNews, searchNews } from '../../../app/features/newsSlice';
import { useDebounceSearch } from '../../../hooks/useDebounceSearch';

const BackOfficeNews = () => {
  const [valuesSearch, setValuesSearch] = useState('');
  const searchValues = useDebounceSearch(valuesSearch);

  const dispatch = useDispatch();
  const { news } = useSelector(state => state.news);
  const { status } = useSelector(state => state.news);

  console.log(news.data);

  useEffect(() => {
    dispatch(searchNews(searchValues));
    console.log('entra');
  }, [dispatch, searchValues]);

  const handleDelete = (id) => {
    dispatch(deleteNovedad(id));
    dispatch(deleteNews(id));
  };
  const handleSearch = (e) => {
    setValuesSearch(e.target.value);
  };
  return (
        <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de Novedades</Text>
                    <Button onClick={() => history.push('/backoffice/news/create')} colorScheme='green'>
                        Crear nueva novedad
                    </Button>
            </Box>

            <Flex mt='2'>
              <FormControl>
                <Input
                  onChange={handleSearch}
                  bg='white'
                  type='search'
                  placeholder='Buscar novedades' />
              </FormControl>
            </Flex>
                  {status === 'loading' &&
                    <Center h='100px'>
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='gray.500'
                        size='xl'/>
                    </Center>
                    }

            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Imagen</Th>
                        <Th>Fecha de Creación</Th>
                        <Th>Acción</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                      (news.data)
                        ? news.data.map(news => {
                          return <TrTable
                                key={news.id}
                                id ={news.id}
                                name={news.name}
                                image={news.image}
                                createdAt={news.created_at}
                                handleDelete={handleDelete}
                                path={'news/'}
                            />;
                        })
                        : <Text>No hay novedades</Text>
                    }
                </Tbody>
            </Table>

        </Container>
  );
};

export default BackOfficeNews;
