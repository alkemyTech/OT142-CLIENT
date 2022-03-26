import React from 'react';
import { Heading, Box, Center } from '@chakra-ui/react';

export default function TitleContact () {
  return (
    <>
      <Box style={{
        flexGrow: '1',
        width: '100%',
        marginBottom: '10px'
      }}>
        <Center>
         <Heading isTruncated as='h1' size='xl'>Contacto</Heading>
        </Center>
      </Box>
    </>
  );
}
