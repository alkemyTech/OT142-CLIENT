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

const TrTable = ({ id, name, image, createdAt, handleDelete, path }) => {
  return (
        <Tr>
            <Td>{name}</Td>
            <Td>
                <Image src={image} boxSize='150px' objectFit='cover' />
            </Td>
            <Td>{new Date(createdAt).toLocaleDateString('es-ES')}</Td>
            <Td>
                <Stack spacing={2}>
                    <Link to={`${path}${id}`}>
                        <Button colorScheme='orange'>
                            <AiFillEdit />
                        </Button>
                    </Link>
                    <Link>
                        <Button colorScheme='red' onClick={() => handleDelete(id)}>
                            <AiFillDelete />
                        </Button>
                    </Link>

                </Stack>
            </Td>
        </Tr>
  );
};

export default TrTable;
