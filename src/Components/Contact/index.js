import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import ContactOngDate from './ContactOngDate';

const Contact = () => {
  return (
    <>
      <Box maxW={'100%'} display={'flex'} justifyContent='center'>
        <Stack w={'960px'} direction={['column', 'column', 'row']} flexWrap={'wrap'} backgroundColor={'gray.200'} borderRadius={'10px'} p={'20px'}>
          <ContactOngDate />
        </Stack>
      </Box>
    </>
  );
};

export default Contact;
