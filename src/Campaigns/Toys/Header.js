import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import Logotipo from './assets/Logotipo.png';

const Header = () => {
  return (
    <Box backgroundColor={{ base: '#EBEBEB', md: '#EBEBEB', lg: '#EBEBEB', xl: 'rgba(235,235,235, .6)' }} maxHeight="206px">
      <Flex
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between', lg: 'space-around' }}
        p={4}
      >
        <Box>
          <Image
            boxSize='120px'
            src={Logotipo}
            alt='Logo de la campaña'
          />
        </Box>

        <Box display={{ base: 'none', md: 'none', lg: 'flex' }}>
          <Text fontSize="2xl" color="#000">#JuntosEnLaRecolecciónDeJuguetes</Text>
        </Box>

        <Box display={{ base: 'none', md: 'flex', lg: 'flex' }}>
          <Image
            src={process.env.PUBLIC_URL + '/images/LOGO-SOMOS-MAS.png'}
            alt="Logo de la ONG"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
