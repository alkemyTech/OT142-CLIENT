import React from 'react';
import { Text, Heading, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <>
      <Center flexDir='column' p={3} >
          <Heading p={2} fontSize={50}>¡ERROR! Página no encontrada</Heading >
          <Text pt={5} fontSize={30} fontWeight='bold'>¿INCONVENIENTES?</Text>
          <Text p={2} fontSize={20}>Por favor comunicarse con el administrador del sitio web</Text>
          <Link to='/'><Text as='u' color='#3366BB'>Haga click aquí</Text></Link><Text> para volver a Home</Text>
      </Center>
    </>
  );
};
