import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export default function TitleContact () {
  return (
    <>
      <Box style={{
        flexGrow: '1',
        width: '100%',
        padding: '20px'
      }}>
         <Heading isTruncated as='h1' size='xl'>Contacto</Heading>
      </Box>
    </>
  );
}
