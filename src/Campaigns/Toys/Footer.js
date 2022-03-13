import React from 'react';
import { Flex, Icon, Heading, Image, Link, Text, useMediaQuery } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

const Footer = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)")
  const [isDesktop] = useMediaQuery("(min-width: 960px)")
  const [isTv] = useMediaQuery("(min-width: 1536px)")

  return (
    <Flex justifyContent='center' alignItems='center' bg="yellow.200">
      <Flex p='3' flexDirection='column'>
        <Flex justifyContent='center' alignItems='center'>
          <Image boxSize='200px' src='/images/LOGO-SOMOS-MAS.png' />
        </Flex>
        <Flex p='3' justifyContent='center' alignItems='center'>
          <Icon ms='4' w='6' h='6' as={FaFacebook} /><Link ms='1' href='https://www.facebook.com/profile.php?id=100077792335889' target='_blank'>{isDesktop ? 'Facebook' : ''}</Link>
          <Icon ms='4' w='6' h='6' as={FaInstagram} /><Link ms='1' href='https://www.instagram.com/somos.mas.ong/' target='_blank'>{isDesktop ? 'Instagram' : ''}</Link>
          <Icon ms='4' w='6' h='6' as={FaTwitter} /><Link ms='1' href='https://twitter.com/ONGSomosMas' target='_blank'>{isDesktop ? 'Twitter' : ''}</Link>
          <Icon ms='4' w='6' h='6' as={FaLinkedin} /><Link ms='1' href='https://www.linkedin.com/company/somosmas/' target='_blank'>{isDesktop ? 'Linkedin' : ''}</Link>
        </Flex>
        {!isMobile &&
          <Flex mt='4' justifyContent='center' alignItems='center'>
            <Icon w='6' h='6' as={BiWorld}/>Accede a nuestro sitio web<Link target='_blank' href='/' color='blue.500' ms='1'>aqui</Link>
          </Flex>
        }
        {isTv &&
          <Flex mt='4' flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading size='md'>Otras campañas</Heading>
            <Link mt='2' href='/toys-campaign' color='blue.500'>Campaña de juguetes</Link>
            <Link mt='2' href='/school-campaign' color='blue.500'>Campaña escolar</Link>
          </Flex>
        }
        <Flex mt='4' justifyContent='center' alignItems='center'>
          <Text>© 2022 Somos Más | All Rights Reserved</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;