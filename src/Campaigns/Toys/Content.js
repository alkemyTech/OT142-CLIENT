import React from 'react';
import { Heading, Stack, Text, Box, Center, Image, Flex } from '@chakra-ui/react';
import './Content.css';
import foto1 from './assets/toy1.jpg';
import foto3 from './assets/toy3.webp';
import foto6 from './assets/toy7.jpg';

const Content = () => {
  const future = Date.parse('Mar 31, 2022 12:00:00');
  const now = new Date();
  const diff = future - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // const hours = Math.floor(diff / (1000 * 60 * 60));
  // const mins = Math.floor(diff / (1000 * 60));
  // const h = hours - days * 24;
  // const m = mins - hours * 60;

  return (
    <Box className='fondo'>
      <Stack textAlign={'center'} py={{ base: 5, md: 8 }}>
        <Heading fontWeight={600} fontSize={{ base: '5xl', sm: '4xl', md: '6xl' }}>
          31 de Marzo{' '}
          <Text as={'span'} color={'#9AC9FB'}>
            12:00 hs
          </Text>
        </Heading>

        <Center>
          <Text align={'center'} color={'gray.800'} maxW={'xl'} padding={'10px'} fontSize={'xl'}>
            En el Predio Vicente, Localidad, Provincia.
          </Text>
        </Center>

        <Center>
          <Flex>
            <Box w='40%' display={['none', 'none', 'grid', 'grid', 'grid']}>
              <Center maxW='220px' className='rotRi'>
                <Image className='im' src={foto1} alt='toys' />
              </Center>
            </Box>

            <Center w='120%' m={4}>
              <Box
                display={['none', 'flex', 'flex', 'flex', 'flex']}
                boxShadow={'3xl'}
                rounded={'md'}>
                <Text fontSize={['xl', '2xl', '3xl', '4xl']} fontWeight={900}>
                  Quedan {days} días para colaborar.
                </Text>
              </Box>
            </Center>

            <Box w='40%' display={['none', 'none', 'flex']}>
              <Center maxW='220px' className='rotLe'>
                <Image src={foto3} alt='' />
              </Center>
            </Box>
          </Flex>
        </Center>

        <Center>
          <Text color={'gray.500'} maxW={'xl'} padding={'10px'}>
           Somos Más lanza una campaña de recolección de juguetes a celebrarse en el mes de marzo. En esta oportunidad se solicitan: juguetes en buen estado, juegos de mesa, libros de cuentos, ropa de abrigo y calzado.
          </Text>
        </Center>

        <Center>
          <Flex display={['none', 'none', 'flex']}>
            <Center maxW='220px' m='10' className='rotRi'>
              <Image src={foto3} alt='toys' />
            </Center>

            <Center maxW='220px' m='10'>
              <Image src={foto1} alt='toys' />
            </Center>

            <Center maxW='220px' m='10' className='rotLe'>
              <Image src={foto6} alt='toys ' />
            </Center>
          </Flex>
        </Center>
      </Stack>
    </Box>
  );
};

export default Content;
