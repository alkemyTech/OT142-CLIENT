import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export const Checkout = () => {
  const mercadopago = useMercadopago.v2('TEST-754a427d-9ab0-4c03-b3b7-c0e1f1272a32', {
    locale: 'es-AR'
  });

  useEffect(() => {
    if (mercadopago) {
      mercadopago.checkout({
        preference: {
          id: '5763673013063478'
        },
        render: {
          container: '.cho-container',
          label: 'pay'
        }
      });
    }
  }, [mercadopago]);

  return (
    <div>
    <div className="cho-container" />
    </div>
  );
};


// import React from 'react';
// import { Button, Text, Box } from '@chakra-ui/react';

// export const Checkout = () => {
//   return (
//     <>
//     <Box p={4} style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-around' }}>
//     <Text fontSize='20px' as='mark' color='black.900' isTruncated>Donaciones</Text>
//     <Button mt={2} colorScheme='teal' variant='outline'> <a
//         href='https://mpago.la/2XhVf5L'
//          >Pay</a> </Button> </Box> </>
//   );
// };