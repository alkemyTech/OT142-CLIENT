import React from 'react'

import { Link } from "react-router-dom";
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
    TableCaption
} from '@chakra-ui/react';
import { MdBuild, MdCreate, MdDeleteForever } from 'react-icons/md';

const SlidesTable = () => {
    const slidesMock = [
        { id: 1, name: 'Título 1', image: 'Imagen  1', order: ' Prueba 1' },
        { id: 2, name: 'Título 2', image: 'Imagen  2', order: ' Prueba 2' },
        { id: 3, name: 'Título 3', image: 'Imagen  3', order: ' Prueba 3' }
    ];

    return (
            <VStack >
                <Container maxW='container.lg'>
                    <Flex margin={16}>                        
                        <Heading size='xl'>Slides</Heading>   
                        <Box ml={4} >                            
                            <Link to="/backoffice/slides/create" p='10px'>
                                <Button
                                    leftIcon={<MdCreate/>}  
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
                        <Tbody >
                            {slidesMock.length > 0                                 
                                ?slidesMock.map((slide) => {
                                    return (
                                        <Tr key={slide.id}>
                                            <Td>{slide.name}</Td>
                                            <Td>{slide.image}</Td>
                                            <Td>{slide.order}</Td>
                                            <Td  >
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
                                                    // onClick={() => handleDelete(slide)}
                                                    >Borrar
                                                </Button>
                                            </Td>
                                        </Tr>
                                    )
                                })
                                : <Td>No hay Slides activos</Td>
                            }                            
                        </Tbody>
                    </Table>
            </Container>            
        </VStack>            
    )
}

export default SlidesTable