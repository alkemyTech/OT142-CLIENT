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
  Button,
  Center
} from '@chakra-ui/react';

const OrganizationBoard = ({ data }) => {
  return (
    <Container maxW="container.xl">
      <Center>
      <Stack
        justifyContent="left"
        p={2}
        spacing={6}
        direction="column"
      >
        <Box w="100%" p={4} bg="#9AC9FB" color="white" textAlign="center">
          <Heading>Datos de la organización</Heading>
        </Box>
        <Stat textAlign="left">
          <StatLabel fontSize="xl" textAlign="center">Nombre actual:</StatLabel>
          <Text textAlign="center">Somos Más</Text>
        </Stat>

        <Stat>
          <StatLabel fontSize="xl" textAlign="center">Logo actual:</StatLabel>
          <Center>
          <Box boxSize="200px">
            <Image
              objectFit="cover"
              src={process.env.PUBLIC_URL + '/images/LOGO-SOMOS-MAS.png'}
              alt="logo de la ong"
            />
          </Box>
          </Center>
        </Stat>

        <Stat>
          <StatLabel fontSize="xl" textAlign="center" mb={2}>Descripción actual:</StatLabel>
          <Text textAlign="center">
          Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás,
          abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de
          inserción social. Uniendo las manos de todas las familias, las que viven en el barrio
          y las que viven fuera de él, es que podemos pensar, crear y garantizar estos
          procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la
          intención de dar alimento a las familias del barrio. Con el tiempo fuimos
          involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de
          trabajo. Hoy somos un centro comunitario que acompaña a más de 700 personas a
          través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y
          trabajo social.
          </Text>
        </Stat>

          <Link to="/backoffice/organization/edit">
            <Center>
            <Button
              mt="8"
              leftIcon={<MdBuild />}
              colorScheme="blue"
              variant="solid"
              size="md"
              height="48px"
              width="200px"
              border="2px"
              type="submit"
            >
              Editar
            </Button>
            </Center>
          </Link>

      </Stack>
      </Center>
    </Container>
  );
};

export default OrganizationBoard;
