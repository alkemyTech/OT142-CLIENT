import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Center py={6}>
      <Box
        maxW={/*'445px'*/"310px"}
        maxH={"500px"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
          overflow={"hidden"}>
              
          <Image
            src={props.image
                     ? props.image
                     : process.env.PUBLIC_URL + '/images/placeholder/270x180.png'
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {
                props.section
                    ? props.section
                    : "Blog"
            }
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {
                props.title
                    ? props.title
                    : "Título de prueba"
            }
          </Heading>
          <Text color={'gray.500'}>
            {
                props.description
                    ? props.description
                    : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
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
}

export default Card