import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export default function TitleContact () {
  return (
    <>
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
         <Heading isTruncated as='h1' size='xl'>Contacto</Heading>
      </Box>
    </>
  );
}
