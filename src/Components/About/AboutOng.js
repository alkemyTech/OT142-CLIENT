import React from 'react';
import { Text, Flex, Container, Heading, Box } from '@chakra-ui/react';

const AboutOng = ({ text }) => {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Container maxW='container.xl' mt={3}>
          <Box>
          <Heading as='h2' size='md' textAlign='center' mb={3}>Nosotros</Heading>
          <Text textAlign='center' mb={3}>
          Desde 1997, en Somos Más trabajamos con los chicos y chicas, mamás y papás,
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
          </Box>
          <Box>
          <Heading as='h2' size='md' textAlign='center' mb={3}>Visión</Heading>
          <Text textAlign='center' mb={3}>
          Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el
          barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la
          educación, salud, trabajo, deporte, responsabilidad y compromiso.
          </Text>
          </Box>
          <Box>
          <Heading as='h2' size='md' textAlign='center' mb={3}>Misión</Heading>
          <Text textAlign='center' mb={3}>
          Trabajar articuladamente con los distintos aspectos de la vida de las familias,
          generando espacios de desarrollo personal y familiar, brindando herramientas que
          logren mejorar la calidad de vida a través de su propio esfuerzo.
          </Text>
          </Box>
        </Container>
    </Flex>
  );
};

export default AboutOng;
