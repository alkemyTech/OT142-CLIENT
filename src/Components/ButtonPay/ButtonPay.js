import React from 'react';
import { Button, Text, Box } from '@chakra-ui/react';

// falta agragar si el pago fue exitoso

export const ButtonPay = () => {
  return (
    <>
    <Box p={4} style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-around' }}>
    <Text fontSize='20px' as='mark' color='black.900' isTruncated>Donaciones</Text>
    <Button mt={2} colorScheme='teal' variant='outline'> <a
        href='https://mpago.la/2XhVf5L'
         >Pagar</a> </Button> </Box> </>
  );
};
