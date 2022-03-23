import React from 'react';
import {
  Tr,
  Td,
  Button,
  Image,
  Stack
} from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TrTable = ({ name, image, createdAt }) => {
  const handleDelete = () => {
    console.log('borro news');
  };

  return (
        <Tr>
            <Td>{name}</Td>
            <Td>
                <Image src={image} boxSize='150px' objectFit='cover' />
            </Td>
            <Td>{new Date(createdAt).toLocaleDateString('es-ES')}</Td>
            <Td>
                {/* poner funcionalidad para borrar novedades y editarlas */}
                <Stack spacing={2}>
                    <Link to='backoffice/news/edit'>
                        <Button colorScheme='orange'>
                            <AiFillEdit />
                        </Button>
                    </Link>
                    <Button colorScheme='red' onClick={() => handleDelete()}>
                        <AiFillDelete />
                    </Button>
                </Stack>
            </Td>
        </Tr>
  );
};

export default TrTable;
