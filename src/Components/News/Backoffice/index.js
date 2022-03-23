import React, { useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button
} from '@chakra-ui/react';
import TrTable from './TrTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, deleteNovedad, deleteNews } from '../../../app/features/newsSlice';

const BackOfficeNews = () => {
  const dispatch = useDispatch();
  const { news } = useSelector(state => state);

  useEffect(async () => {
    dispatch(await getAllNews());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteNovedad(id));
    dispatch(deleteNews(id));
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
                            />;
                        })
                    }
                </Tbody>
            </Table>

        </Container>
  );
};

export default BackOfficeNews;
