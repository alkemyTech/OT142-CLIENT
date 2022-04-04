import React, { useEffect, useState, useCallback } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Input,
  Container,
  Box,
  Button,
  Select,
  FormControl,
  FormLabel
} from '@chakra-ui/react';
import TrTable from '../../Activities/backoffice/TrTable';
import { Link } from 'react-router-dom';

const BackOfficeNews = () => {
  const [newsData, setDataNews] = useState([]);
  const [categorySelected, setCategorySelected] = useState('');
  const [query, setQuery] = useState('');

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };

  const debouncer = (handleChange) => {
    return useCallback(debounce(handleChange), []);
  };

  useEffect(() => {
    if ((query === '' || query.length <= 2) && categorySelected === '') {
      return fetch(
        'https://ongapi.alkemy.org/api/news')
        .then((r) => r.json())
        .then((r) => {
          const result = r.data;
          setDataNews(result);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    };
  }, [query, categorySelected]);

  const handleChangeByName = (e) => {
    const { value } = e.target;
    setQuery(value);
    if (value.length >= 3) {
      fetch(
        `https://ongapi.alkemy.org/api/news?search=${value}`)
        .then((r) => r.json())
        .then((r) => {
          const result = r.data;
          console.log('me ejecuto');
          setDataNews(result);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    }
  };

  const handleChangeByCategory = (e) => {
    const { value } = e.target;
    setCategorySelected(value);
    if (value !== '' && value !== '5') {
      fetch(
        `https://ongapi.alkemy.org/api/news?category=${value}`)
        .then((r) => r.json())
        .then((r) => {
          const result = r.data;
          console.log('me ejecuto con cat');
          setDataNews(result);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    } else {
      fetch(
        'https://ongapi.alkemy.org/api/news')
        .then((r) => r.json())
        .then((r) => {
          const result = r.data;
          setDataNews(result);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
    }
  };

  useEffect(() => {
  }, [newsData]);

  return (
     <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de novedades</Text>
                <Link to="/backoffice/activities/create">
                    <Button colorScheme='green'>
                        Crear nueva actividad
                    </Button>
                </Link>
            </Box>
            <FormControl>
              <FormLabel>Búsqueda por nombre:</FormLabel>
              <Input type='text' onChange={debouncer(handleChangeByName)} placeholder='Ingrese el nombre de la novdedad'/>
            </FormControl>
            <Box>
              <Text>Selecione una categoría</Text>
                <Select placeholder='Buscar por categoría' onChange={debouncer(handleChangeByCategory)}>
                  <option value='1'>Niños</option>
                  <option value='2'>Adolescente</option>
                  <option value='3'>Donaciones</option>
                  <option value='4'>Animales</option>
                  <option value='5'>Todas las categorías</option>
                </Select>
            </Box>
            {newsData.length > 0
              ? <Table variant='simple'>
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
                        newsData.map(news => {
                          return <TrTable
                                key={news.id}
                                name={news.name}
                                image={news.image}
                                createdAt={news.created_at}
                            />;
                        })
                    }
                </Tbody>
            </Table>
              : null }
        </Container>
  );
};

export default BackOfficeNews;
