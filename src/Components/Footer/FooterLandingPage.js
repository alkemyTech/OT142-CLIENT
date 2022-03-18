import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../../Assets/logoSomosMas.png';
import { Link, Center, Box, Text, Flex, Spacer, Image, Heading } from '@chakra-ui/react';

export const FooterLandingPage = () => {
  return (
    <>
      <Box borderTop='solid 1px' bg={'linear-gradient(90deg, rgba(154,201,251,1) 0%, rgba(219,87,82,1) 50%, rgba(250,250,136,1) 100%)'}>

        {/* ---- MOBILE VIEW ---- */}

        <Box d={{ md: 'none' }}>
          <Center>
            <Image src={logo} alt='logoONG' />
          </Center>
          <Center>
            <Box p={3}><Link><HiOutlineMail size={30} /></Link></Box>
            <Box p={3}><Link><FaInstagram size={30} padding={5} /></Link></Box>
            <Box p={3}><Link><FaFacebook size={30} /></Link></Box>
          </Center>
          <Center>
            <Box>
              <Text fontWeight={'bold'}><Link>Noticias</Link></Text>
              <Text fontWeight={'bold'}><Link>Actividades</Link></Text>
              <Text fontWeight={'bold'}><Link>Novedades</Link></Text>
              <Text fontWeight={'bold'}><Link>Testimonios</Link></Text>
              <Text fontWeight={'bold'}><Link>Nosotros</Link></Text>
              <Text fontWeight={'bold'}><Link>Contacto</Link></Text>
            </Box>
          </Center>
        </Box>

        {/* ---- TABLET VIEW ---- */}

        <Flex d={{ base: 'none', sm: 'none', md: 'flex' }}>
          <Flex mt='45px'>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Noticias</Link></Text>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Actividades</Link></Text>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Novedades</Link></Text>
          </Flex>
          <Spacer />
          <Box position={'relative'} top={{ md: '-30px', lg: '-50px' }}><Image w={{ lg: '250px' }} src={logo} alt='logoONG' /></Box>
          <Spacer />
          <Flex mt='45px'>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Testimonios</Link></Text>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Nosotros</Link></Text>
            <Text pr={{ md: '2', lg: '4' }} pl={{ md: '1', lg: '3' }} fontSize={{ lg: '20px' }} fontWeight={'bold'}><Link>Contacto</Link></Text>
          </Flex>
        </Flex>
        <Flex d={{ base: 'none', sm: 'none', md: 'flex' }} flexDir='column' h={{ md: '100px', lg: '170px' }}>
          <Center position='relative' justifyContent={{ md: 'center', lg: 'flex-start' }} top='-85px'>
            <Flex flexDir={{ lg: 'column' }}>
              <Link>
                <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                  <Box><HiOutlineMail size={40} /></Box>
                  <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                    <Text fontWeight={'bold'} pl={{ lg: '2' }}>somosfundacionmas@gmail.com</Text>
                  </Box>
                </Flex>
              </Link>
              <Link>
                <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                  <Box><FaInstagram size={40} /></Box>
                  <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                    <Text fontWeight={'bold'} pl={{ lg: '2' }}>SomosMas</Text>
                  </Box>
                </Flex>
              </Link>
              <Link>
                <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                  <Box><FaFacebook size={40} /></Box>
                  <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                    <Text fontWeight={'bold'} pl={{ lg: '2' }}>Somos_Mas</Text >
                  </Box>
                </Flex>
              </Link>
            </Flex>
          </Center>
          <Center position='relative' top={{ lg: '-94px' }}>
            <Text position='relative' top={{ md: '-30px', lg: '-225px' }} fontWeight={'bold'}>Click here: <Link>ONG HOME PAGE</Link></Text>
          </Center>
          <Flex flexDir={{ lg: 'column' }} d={{ base: 'none', xl: 'flex' }} position={{ xl: 'absolute' }} top={{ xl: '90%' }} left={{ xl: '80%' }}>
            <Heading>Campañas</Heading>
            <Text fontWeight={'bold'}><Link>Escuelas</Link></Text>
            <Text fontWeight={'bold'}><Link>Eco actividades</Link></Text>
            <Text fontWeight={'bold'}><Link>Juguetes</Link></Text>
            <Text fontWeight={'bold'}><Link>Testimonios</Link></Text>
          </Flex>

        </Flex>

      </Box>
    </>
  );
};
