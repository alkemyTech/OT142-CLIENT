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
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSlidesSlice, removeSlideSlice, searchSlidesSlice } from '../../../app/features/slidesSlice';
import { useDebounceSearch } from '../../../hooks/useDebounceSearch';

const BackOfficeSlides = () => {
  const [valuesSearch, setValuesSearch] = useState('');
  const searchValues = useDebounceSearch(valuesSearch);

  const dispatch = useDispatch();
  const { slides } = useSelector(state => state);

  useEffect(() => {
    dispatch(getSlidesSlice());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchSlidesSlice(searchValues));
  }, [dispatch, searchValues]);

  const handleDelete = (id) => {
    dispatch(removeSlideSlice(id));
  };

  const handleChange = (e) => {
    setValuesSearch(e.target.value);
  };

  return (
        <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de slides</Text>
                <Link to="/backoffice/slides/create">
                    <Button colorScheme='green'>
                        Crear nuevo Slide
                    </Button>
                </Link>
            </Box>

            <Flex mt='2'>
              <FormControl>
                <Input
                  onChange={handleChange}
                  bg='white'
                  type='search'
                  placeholder='Buscar slides' />
              </FormControl>
            </Flex>
                  {slides.status === 'loading' &&
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
                      (slides.slides)
                        ? slides.slides.map(slide => {
                          return <TrTable
                                key={slide.id}
                                id ={slide.id}
                                name={slide.name}
                                image={slide.image}
                                createdAt={slide.created_at}
                                handleDelete={handleDelete}
                                path={'slides/'}
                            />;
                        })
                        : <Text>No hay slides</Text>
                    }
                </Tbody>
            </Table>

        </Container>
  );
};

export default BackOfficeSlides;
