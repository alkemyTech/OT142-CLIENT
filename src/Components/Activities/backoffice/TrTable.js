import React from 'react'
import {
    Tr,
    Td,
    Button,
    Image,
    Stack
} from '@chakra-ui/react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const TrTable = ({name, image, createdAt}) => {
  return (
    <Tr>
        <Td>{name}</Td>
        <Td>
            <Image src={image} boxSize='150px' objectFit='cover'/>
        </Td>
        <Td>{new Date(createdAt).toLocaleDateString('es-ES')}</Td>
        <Td>
            <Stack spacing={2}>
                <Button colorScheme='orange'>
                        <AiFillEdit />
                </Button>
                <Button colorScheme='red'>
                    <AiFillDelete />
                </Button>
            </Stack>
        </Td>
    </Tr>
  )
}

export default TrTable