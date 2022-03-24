import React from 'react';
import {
  Flex,
  Icon,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isDesktop] = useMediaQuery('(min-width: 960px)');
  const [isTv] = useMediaQuery('(min-width: 1536px)');

  return (
    <>
      <Flex bg="red.200" flexDirection="column">
        <Flex
          p="5"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent={isMobile ? 'center' : 'space-between'}
        >
          <Flex justifyContent="center" alignItems="center">
            <Link as={RouterLink} to='/'>
              <Image boxSize="200px" src="/images/LOGO-SOMOS-MAS.png" />
            </Link>
          </Flex>
          <Flex p="3" justifyContent="center" alignItems="center">
            <Icon ms="6" w="6" h="6" as={FaFacebook} />

            <Link
              ms="2"
              href="https://www.facebook.com/profile.php?id=100077792335889"
              target="_blank"
            >
              {isDesktop ? 'Facebook' : ''}
            </Link>
            <Icon ms="6" w="6" h="6" as={FaInstagram} />
            <Link
              ms="2"
              href="https://www.instagram.com/somos.mas.ong/"
              target="_blank"
            >
              {isDesktop ? 'Instagram' : ''}
            </Link>
            <Icon ms="6" w="6" h="6" as={FaTwitter} />
            <Link ms="2" href="https://twitter.com/ONGSomosMas" target="_blank">
              {isDesktop ? 'Twitter' : ''}
            </Link>
            <Icon ms="6" w="6" h="6" as={FaLinkedin} />
            <Link>
            </Link>
            <Link
              ms="2"
              href="https://www.linkedin.com/company/somosmas/"
              target="_blank"
            >
              {isDesktop ? 'Linkedin' : ''}
            </Link>
          </Flex>
          {!isMobile && (
            <Flex
              textAlign="center"
              mt="4"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Icon w="6" h="6" as={BiWorld} />
              Accede a nuestro sitio web
              <Link as={RouterLink} to='/' target='_blank'>
                <Link target="_blank" color="blue.500" ms="1">
                  aquí
                </Link>
              </Link>
            </Flex>
          )}
          {isTv && (
            <Flex
              mt="4"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Heading size="md">Otras campañas</Heading>
              <Link as={RouterLink} to='/toys-campaign'>
                <Link mt="2" color="blue.500">
                  Campaña de juguetes
                </Link>
              </Link>
              <Link as={RouterLink} to='/school-campaign'>
                <Link mt="2" color="blue.500">
                  Campaña escolar
                </Link>
              </Link>

            </Flex>
          )}
        </Flex>
        <Flex p="3" justifyContent="center" alignItems="center">
          <Text textAlign='center'>© 2022 Somos Más | Todos los derechos reservados. </Text>
        </Flex>
      </Flex>
    </>
  );
};
export default Footer;
