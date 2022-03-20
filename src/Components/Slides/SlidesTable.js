import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {
  VStack,
  Container,
  Flex,
  Box,
  Button,
  Heading,
  Thead,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Image
} from '@chakra-ui/react';
import { MdBuild, MdCreate, MdDeleteForever } from 'react-icons/md';
import { getSlideRequest, deleteSlideRequest } from './services/SlidesApiService';

const SlidesTable = () => {
  const [slides, setSlides] = useState([{}]);

  const getSlides = async () => {
    try {
      const result = await getSlideRequest();
      if (result.status === 200) {
        const { data } = await result.data;
        setSlides(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteSlideRequest(id);
      if (result.status === 200) {
        setSlides(slides.filter((slide) => slide.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSlides();
  }, []);

  return (
        <VStack >
            <Container maxW='container.lg'>
                <Flex margin={16}>
                    <Heading size='xl'>Slides</Heading>
                    <Box ml={4} >
                        <Link to='/backoffice/slides/create' p='10px'>
                            <Button
                                leftIcon={<MdCreate />}
                                variant='solid'
                                size='sm'
                            >
                                Nuevo
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                <Table variant='striped'>
                    <TableCaption>Gestión de Slides</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Título</Th>
                            <Th>Imagen</Th>
                            <Th>Orden</Th>
                            <Th>Editar</Th>
                            <Th>Eliminar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {slides.length > 0
                          ? slides.map((slide, index) => {
                            return (
                                    <Tr key={index}>
                                        <Td>{slide.name}</Td>
                                        <Td><Image boxSize='100px' alt='imgSlide' src={slide.image} /></Td>
                                        <Td>{slide.order}</Td>
                                        <Td>
                                            <Button
                                                colorScheme='blue'
                                                size='sm'
                                                leftIcon={<MdBuild />}
                                                variant='outline'
                                            // onClick={() => handleEdit(slide)}
                                            >Editar
                                            </Button>
                                        </Td>
                                        <Td>
                                            <Button
                                                colorScheme='red'
                                                size='sm'
                                                leftIcon={<MdDeleteForever />}
                                                variant='outline'
                                                onClick={() => handleDelete(slide.id)}
                                            >Borrar
                                            </Button>
                                        </Td>
                                    </Tr>
                            );
                          })
                          : <Td>No hay Slides activos</Td>
                        }
                    </Tbody>
                </Table>
            </Container>
        </VStack>
  );
};

export default SlidesTable;
