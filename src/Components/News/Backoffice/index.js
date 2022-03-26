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
  Input
} from '@chakra-ui/react';
import TrTable from '../../../utils/TrTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, deleteNovedad, deleteNews, filterNews } from '../../../app/features/newsSlice';
import { useDebounce } from 'use-debounce';

const BackOfficeNews = () => {
  const dispatch = useDispatch();
  const { news } = useSelector(state => state);
  const [nameValue, setName] = useState('');
  const [useDebounceValue] = useDebounce(name, 500);
  useEffect(async () => {
    dispatch(await getAllNews());
  }, [dispatch]);
  useEffect(() => {
    useDebounceFuntion();
  }, [useDebounceValue]);

  const handleDelete = (id) => {
    dispatch(deleteNovedad(id));
    dispatch(deleteNews(id));
  };
  const handleOnChange = (e) => {
    if (e.target.value.lenght > 3) {
      setName(e.target.value);
    }
  };

  const useDebounceFuntion = () => {
    if (useDebounceValue) {
      dispatch(filterNews(useDebounceValue));
    }
  };

  return (
        <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de Novedades</Text>
                <Link to="/backoffice/news/create">
                    <Button colorScheme='green'>
                        Crear nueva novedad
                    </Button>
                </Link>
            </Box>
            <Box>
                {news.news && (
                    <Input
                    placeholder='busqueda por nombre'
                    name='name'
                    value={nameValue}
                    onChange={handleOnChange}
                    />
                ) }
            </Box>

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
                        news.news.map(news => {
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
                    }
                </Tbody>
            </Table>

        </Container>
  );
};

export default BackOfficeNews;
