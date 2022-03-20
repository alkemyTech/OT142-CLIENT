import React from 'react';
import { Link } from 'react-router-dom';
import { MdBuild } from 'react-icons/md';
import {
  Container,
  Stack,
  Stat,
  StatLabel,
  Heading,
  Text,
  Box,
  Image,
  Button
} from '@chakra-ui/react';

const OrganizationBoard = ({ data }) => {
  return (
    <Container maxW='container.sm'>
      <Stack

        justifyContent='left'
        p={2}
        spacing={6}
        direction='column'
      >
        <Box w='100%' p={4} bg='#9AC9FB' color='white' textAlign='center'>
          <Heading>Datos de la organización</Heading>
        </Box>
        <Stat textAlign='left'>
          <StatLabel fontSize='xl'>Nombre actual:</StatLabel>
          <Text >Somos Más</Text>
        </Stat>

        <Stat>
          <StatLabel fontSize='xl'>Logo actual:</StatLabel>
          <Box boxSize='300px' >
            <Image
              objectFit='cover'
              src={process.env.PUBLIC_URL + '/images/LOGO-SOMOS-MAS.png'}
              alt='logo de la ong'
            />
          </Box>
        </Stat>

        <Stat>
          <StatLabel fontSize='xl'>Descripción actual:</StatLabel>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            voluptatibus maiores quam iure repellat similique atque impedit
            beatae quis. Iure harum nisi doloremque, animi tempore inventore
            maiores excepturi consectetur! Minus. Vero cupiditate provident iste
            maxime ratione possimus fugit incidunt unde, quam labore odio nisi
            voluptatum, eveniet eius ducimus harum! Hic pariatur numquam nostrum
            odio quaerat porro doloribus at sapiente labore.
          </Text>
        </Stat>

          <Link to='/backoffice/organization/edit'>
            <Button
              mt='8'
              leftIcon={<MdBuild />}
              colorScheme='blue'
              variant='solid'
              size='md'
              height='48px'
              width='200px'
              border='2px'
              type='submit'
            >
              Editar
            </Button>
          </Link>

      </Stack>
    </Container>
  );
};

export default OrganizationBoard;
