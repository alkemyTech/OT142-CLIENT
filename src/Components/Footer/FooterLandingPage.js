import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../Assets/logoSomosMas.png';
import {
  Link,
  Center,
  Box,
  Flex,
  Image,
  Spacer,
  Heading
} from '@chakra-ui/react';
import { Link as LinkR } from 'react-router-dom';

export const FooterLandingPage = () => {
  return (
    <>
      {/* ---- MOBILE VIEW ---- */}

      <Box d={{ md: 'none' }} bg={'rgba(250,250,230,1)'}>
        <Center>
          <Link as={LinkR} to='/'>
           <Image src={logo} alt="logoONG" />
          </Link>

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
        </Center>
        <Center>
          <Box p={3}>
            <Link href="https://twitter.com/ONGSomosMas" target="_blank">
              <FaTwitter size={30} />
            </Link>
          </Box>
          <Box p={3}>
            <Link
              href="https://www.instagram.com/somos.mas.ong/"
              target="_blank"
            >
              <FaInstagram size={30} padding={5} />
            </Link>
          </Box>
          <Box p={3}>
            <Link
              href="https://www.facebook.com/profile.php?id=100077792335889"
              target="_blank"
            >
              <FaFacebook size={30} />
            </Link>
          </Box>
        </Center>
      </Box>

      {/* ---- TABLET VIEW ---- */}
      <Flex
        d={{ sm: 'none', md: 'flex' }}
        h={{ md: '250px' }}
        flexDir={{ base: 'none', md: 'row' }}
        bg={'rgba(250,250,230,1)'}
      >
        <Flex d={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
          <Image src={logo} alt="logoONG" />
        </Flex>
        <Spacer />
        <Flex
          flexDir={{ md: 'row', lg: 'column' }}
          alignItems="center"
          justify="center"
          d={{ base: 'none', sm: 'none', md: 'none', lg: 'flex' }}
        >
          <Flex
            flexDir={{ md: 'column', lg: 'row' }}
            alignItems="center"
            ml={{ lg: '3' }}
          >
            <Link
              href="https://twitter.com/ONGSomosMas"
              ml={{ md: '3' }}
              target="_blank"
            >
              <FaFacebook size={40} />
            </Link>
            <Link
              d={{ md: 'none', lg: 'flex' }}
              fontWeight={'bold'}
              pl={{ lg: '2' }}
              href="https://twitter.com/ONGSomosMas"
              target="_blank"
            >
              Facebook
            </Link>
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
          <Flex
            flexDir={{ md: 'column', lg: 'row' }}
            alignItems="center"
            ml={{ lg: '3' }}
          >
            <Link
              href="https://twitter.com/ONGSomosMas"
              ml={{ md: '3' }}
              target="_blank"
            >
              <FaInstagram size={40} />
            </Link>
            <Link
              d={{ md: 'none', lg: 'flex' }}
              fontWeight={'bold'}
              pl={{ lg: '2' }}
              href="https://twitter.com/ONGSomosMas"
              target="_blank"
            >
              Instagram
            </Link>
          </Flex>
          <Flex
            flexDir={{ md: 'column', lg: 'row' }}
            alignItems="center"
            ml={{ lg: '3' }}
          >
            <Link
              href="https://twitter.com/ONGSomosMas"
              ml={{ md: '3' }}
              target="_blank"
            >
              <FaTwitter size={40} />
            </Link>
            <Link
              d={{ md: 'none', lg: 'flex' }}
              fontWeight={'bold'}
              pl={{ lg: '2' }}
              href="https://twitter.com/ONGSomosMas"
              target="_blank"
            >
              Twitter
            </Link>
          </Flex>
          <Flex
            flexDir={{ md: 'column', lg: 'row' }}
            alignItems="center"
            ml={{ lg: '3' }}
          >
            <Link
              href="https://twitter.com/ONGSomosMas"
              ml={{ md: '3' }}
              target="_blank"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              d={{ md: 'none', lg: 'flex' }}
              fontWeight={'bold'}
              pl={{ lg: '2' }}
              href="https://twitter.com/ONGSomosMas"
              target="_blank"
            >
              Linkedin
            </Link>
          </Flex>
        </Flex>
        <Spacer />
        <Flex alignItems="center" mr="3">
          <Link fontWeight={'bold'} as={LinkR} to="/">
            Click here: ONG HOME PAGE
          </Link>
        </Flex>
        <Spacer d={{ base: 'none', xl: 'flex' }} />
        <Flex
          d={{ base: 'none', xl: 'flex' }}
          flexDir="column"
          alignItems="center"
          justify="center"
          mr="3"
        >
          <Heading>Otra campaña</Heading>
          <Link fontWeight={'bold'} as={LinkR} to="/toys-campaign">
            Juguetes
          </Link>
        </Flex>

        {/* <Center justifyContent={{ md: 'center', lg: 'flex-start' }}>
              <Flex flexDir={{ lg: 'column' }}>
                  <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                    <Link href='https://twitter.com/ONGSomosMas' target='_blank'><FaTwitter size={40} /></Link>
                    <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                      <Link fontWeight={'bold'} pl={{ lg: '2' }} href='https://twitter.com/ONGSomosMas' target='_blank'>Twitter</Link>
                    </Box>
                  </Flex>
                  <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                    <Link href='https://www.instagram.com/somos.mas.ong/' target='_blank'><FaInstagram size={40} /></Link>
                    <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                      <Link fontWeight={'bold'} pl={{ lg: '2' }} href='https://www.instagram.com/somos.mas.ong/' target='_blank'>Instagram</Link>
                    </Box>
                  </Flex>
                  <Flex flexDir={{ lg: 'row' }} p={{ md: '3', lg: '5' }} alignItems='center'>
                    <Link href='https://www.facebook.com/profile.php?id=100077792335889' target='_blank'><FaFacebook size={40} /></Link>
                    <Box d={{ base: 'none', md: 'none', lg: 'flex' }}>
                      <Link fontWeight={'bold'} pl={{ lg: '2' }} href='https://www.facebook.com/profile.php?id=100077792335889' target='_blank'>Facebook</Link >
                    </Box>
                  </Flex>
              </Flex>
            <Center >
              <Link fontWeight={'bold'}>Click here: <Link>ONG HOME PAGE</Link></Link>
            </Center>
            <Flex flexDir={{ lg: 'column' }} d={{ base: 'none', xl: 'flex' }}>
              <Heading>Otra campaña</Heading>
              <Link fontWeight={'bold'}><Link href='/toys-campaign'>Juguetes</Link></Link>
            </Flex>
            </Center> */}
      </Flex>
    </>
  );
};
