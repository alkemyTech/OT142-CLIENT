import React from 'react';
import {

  Heading,
  Stack,
  Text,
    Box,
  Center,
  useColorModeValue,
  Image,
  WrapItem,
  Wrap,
} from '@chakra-ui/react';

import "./Content.css"


const Content = () => {

    const future = Date.parse("Mar 31, 2022 12:00:00");
    let now = new Date();
    let diff = future - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor(diff / (1000 * 60));
    let h = hours - days * 24;
    let m = mins - hours * 60;

   return (
         <Box  className='fondo'>
            <Stack
                textAlign={'center'}
                align={'center'}
                py={{ base: 5, md: 8 }}
                >
                <Heading
                fontWeight={600}
                fontSize={{ base: '5xl', sm: '4xl', md: '6xl' }}
                >
                    31 de Marzo{' '}
                <Text as={'span'} color={'#9AC9FB'}>
                    12:00 hs
                </Text>
                </Heading>

                    <Center py={6}>
                    <Box
                        display={["none","grid","grid","grid","grid"]}
                        bg={useColorModeValue('#9AC9FB', 'gray.800')}
                        boxShadow={'3xl'}
                        rounded={'md'}
                        overflow={'hidden'}
                        >                        
                        <Stack
                            textAlign={'center'}
                            color={useColorModeValue('gray.800', 'white')}
                            align={'center'}>                                     
                                <Text fontSize={'6xl'} fontWeight={800}>Faltan solo {days}d {h}h {m}m</Text>                                
                        </Stack>                       
                    </Box>
                </Center>

                <Text color={'gray.800'} maxW={'xl'} padding={'10px'} fontSize={'xl'}>
                   En el Predio Vicente, Localidad, Provincia
                </Text>

                <Text color={'gray.500'} maxW={'xl'} padding={'10px'}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil tenetur, quas maiores modi ut quaerat, repudiandae voluptatum doloremque non fuga asperiores blanditiis? Nobis pariatur amet a vel voluptate incidunt. Animi?
                </Text>            

                <Wrap  justify='center' display={["none","none","flex","flex"]} >
                    {/* <WrapItem>
                        <Center w='250px'  bg='red.200'>
                        <Image src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2021/08/nino-jugando-solo-2440005.jpg?itok=1KSKLUcn' alt='Dan Abramov' />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='250px' bg='green.200'>
                        <Image src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2021/08/nino-jugando-solo-2440005.jpg?itok=1KSKLUcn' alt='Dan Abramov' />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='250px'  bg='tomato'>
                        <Image src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2021/08/nino-jugando-solo-2440005.jpg?itok=1KSKLUcn' alt='Dan Abramov' />
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center w='250px'  bg='blue.200'>
                       <Image src='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_1752/public/media/image/2021/08/nino-jugando-solo-2440005.jpg?itok=1KSKLUcn' alt='Dan Abramov' />
                        </Center>
                    </WrapItem>                   */}
                </Wrap>  
            </Stack>
    </Box>

  );
}
 
export default Content;

