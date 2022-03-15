import React from 'react';
import ImagenEscolar1 from '../School/Assets/ImagenEscolar1.jpg';
import Logotipo2 from '../School/Assets/Logotipo2.png';
import ImagenEscolar3 from '../School/Assets/ImagenEscolar3.jpg';
import Logotipo from '../School/Assets/Logotipo.png';
import 'animate.css';
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

  const [isSmallerScreen] = useMediaQuery('(max-width:992px)');
  const [isNotSmallerScreen] = useMediaQuery('(min-width:1200px)');
  const [margin] = useMediaQuery('(min-width:992px)');

  return (
    <>
      <Container maxW='container.xl' mt={20} p={2} bg={isNotSmallerScreen ? 'gray.100' : null}>

        <Flex direction={isSmallerScreen ? 'column' : 'row'}>
          <Center mb={5} >
            <Image boxSize='200px' src={Logotipo} mr={margin ? "10" : null} alt='Logotipo' />
          </Center>

          <Box>
            <Center mb={5}>
              <Text fontSize='xl' fontWeight='semibold'>Campaña solidaria: DONACIÓN DE ÚTILES ESCOLARES.</Text>
            </Center>
            <Center mb={5}>
              <Text fontSize='x2'>Todos los años Somos Más lanza una campaña solidaria en el mes de enero, con el objetivo de recolectar materiales escolares para ayudar a los chicos y chicas de la comunidad en el inicio del nuevo ciclo lectivo.</Text>
            </Center>
            <Center>
              <Text fontSize='x2'>Para colaborar se pueden donar: lápiz negro, cajita de lápices de colores, témpera, pincel, fibras, goma, hojas rayadas, carpetas, hojas de dibujo, regla, compás, tijera, cartuchera, plásticola, cuadernos, mochilas, útiles usados que estén en buen estado.</Text>
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
          <Center mt={5} mb={5} bg='gray.300'>
            <Text fontSize='3xl'>FALTAN {totalDias} DIAS</Text>
          </Center>
        </Show>

        <Show above='lg'>
          <Center>
            <Image boxSize='xs' m={5} src={ImagenEscolar1} className='animate__animated animate__fadeInLeft' alt='Imagen Escolar' />
            <Image m={5} src={Logotipo2} className='animate__animated animate__fadeIn' alt='Imagen Escolar' />
            <Image boxSize='xs' m={5} src={ImagenEscolar3} className='animate__animated animate__fadeInRight' alt='Imagen Escolar' />
          </Center>
        </Show>

      </Container>
    </>
  );
}

export default Content;



