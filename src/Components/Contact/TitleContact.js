import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export default function TitleContact () {
  return (
    <>
      <Box style={{
        flexGrow: '1',
        width: '100%',
        marginBottom: '10px'
      }}>
         <Heading isTruncated as='h1' size='xl' textAlign='center' >Contacto</Heading>
      </Box>
    </>
  );
}
