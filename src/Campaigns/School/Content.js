import React from 'react';
import ImagenEscolar1 from './ImagenEscolar1.jpg';
import ImagenEscolar2 from './ImagenEscolar2.jpeg';
import Logotipo from './Logotipo.png';
import { useMediaQuery } from '@chakra-ui/media-query';
import {
  Container,
  Center,
  Text,
  Flex,
  Box,
  Image,
  Show
} from '@chakra-ui/react';

const Content = () => {

  var fechaInicio = new Date().getTime();
  var fechaFin = new Date('2023-01-31').getTime();

  var diff = fechaFin - fechaInicio;
  var totalDias = Math.trunc(diff / (1000 * 60 * 60 * 24))

  const [isNotSmallerScreen] = useMediaQuery("(min-width:1200px)");

  return (
    <>
      <Container maxW='container.md' mt={20} p={2} backgroundColor={isNotSmallerScreen ? "gray.100" : null}>

        <Flex>
          <Box mr={10}>
            <Image src={Logotipo} alt='Logotipo' />
          </Box>

          <Box>
            <Center mb={5}>
              <Text fontSize='xl' fontWeight="semibold">Campaña solidaria: DONACIÓN DE ÚTILES ESCOLARES.</Text>
            </Center>
            <Center>
              <Text fontSize='x2'>Todos los años Somos Más lanza una campaña solidaria en el mes de enero, con el objetivo de recolectar materiales escolares para ayudar a los chicos y chicas de la comunidad en el inicio del nuevo ciclo lectivo.</Text>
            </Center>
          </Box>
        </Flex>

        <Center mt={5}>
          <Text fontSize='xl'>Fecha: 31 de Enero, 12:30 hs.</Text>
        </Center>

        <Center>
          <Text fontSize='xl'>Lugar: Calle 123, Capital, Córdoba.</Text>
        </Center>


        <Show above='md'>
          <Center border='2px' borderColor='gray.200' mt={5} mb={5}>
            <Text fontSize='3xl'>FALTAN {totalDias} DIAS</Text>
          </Center>
        </Show>

        <Show above='lg'>
          <Center>
            <Image boxSize='xs' m={5} src={ImagenEscolar1} alt='Imagen Escolar' />
            <Image boxSize='xs' m={5} src={ImagenEscolar2} alt='Imagen Escolar' />
          </Center>
        </Show>

      </Container>
    </>
  );
}

export default Content;



