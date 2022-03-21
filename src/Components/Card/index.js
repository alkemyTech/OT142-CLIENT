import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import RenderHtml from '../RenderHtml';

const Card = ({ data }) => {
  return (
    <Center py={6} maxW='100%'>
      <Box
        maxW={/* '445px' */'310px'}
        maxH={'500px'}
        w={'100%'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'200px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          overflow={'hidden'}>

          <Image
            boxSize='100%'
            objectFit='cover'
            src={data.image
              ? data.image
              : process.env.PUBLIC_URL + '/images/placeholder/270x180.png'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {
                data.name
                  ? data.name
                  : 'Título de prueba'
            }
          </Heading>
          <Text color={'gray.500'}>
            {
                data.description
                  ? <RenderHtml htmlText={data.description}/>
                  : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
            }
          </Text>
        </Stack>
        {/* Se deja comentado por si hay que agregar luego
         <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
    </Center>
  );
};

export default Card;
