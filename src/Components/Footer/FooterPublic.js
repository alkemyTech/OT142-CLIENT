import React, { useEffect, useState } from 'react';
import {
  Image,
  Box,
  Text,
  Stack
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiOutlineTwitter, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import './footer.css';
import { get } from '../../Services/publicApiService';
import logo from '../../Assets/logoSomosMas.png';

const FooterPublic = () => {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data } = await get('/organization');
      setOrganization(data.data);
    };

    getData();
    console.log(organization);
  }, []);

  return (
        <>
            <div style={{
              clipPath: 'polygon(0 0%, 0% 100%, 100% 100%)',
              background: '#CBD5E0',
              width: '100%',
              height: '40px',
              margin: '-1px',
              marginTop: '50px'
            }}></div>
            <Box bg='gray.300' padding='4' maxW='100%'>
                <footer>
                    <Stack
                        spacing='24px'
                        alignItems="center"
                        direction={['column', 'column', 'row']}
                    >
                        <Box flex={1} p={4} display="flex" flexDirection="column" alignItems="center">
                                <Text fontSize={{ base: '18px', sm: '1.4em', lg: '2em' }} textAlign="center">
                                    <a href='#'>
                                        {organization.name || 'Bienvenido a Somos Más'}
                                    </a>
                                </Text>
                            <Image src={organization.logo || logo} alt={organization.short_description} />
                        </Box>
                            <Box flex={1} p={4}>
                                <nav className='nav-footer'>
                                    <ul>
                                        <li>
                                            <Link to='/'>Inicio</Link>
                                        </li>
                                        <li>
                                            <Link to='/nosotros'>Sobre nosotros</Link>
                                        </li>
                                        <li>
                                            <Link to='/actividades'>Actividades</Link>
                                        </li>
                                        <li>
                                            <Link to='/contacto'>Contacto</Link>
                                        </li>
                                        <li>
                                            <Link to='/registro'>Registro</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Box>
                        <Stack flex={1} p={4} direction={['column', 'column', 'row']}>
                            <a href={organization.twitter_url} className="links tw">
                                <AiOutlineTwitter />
                                <span>Twitter</span>
                            </a>
                            <a href={organization.facebook_url} className="links fb">
                                <AiFillFacebook />
                                    <span>Facebook</span>
                            </a>
                            <a href={organization.linkedin_url} className="links ln">
                                <AiFillLinkedin />
                                    <span>LinkedIn</span>
                            </a>
                            <a href={organization.instagram_url} className="links ig">
                                <AiFillInstagram />
                                    <span>Instagram</span>
                            </a>
                        </Stack>
                    </Stack>
                </footer>
            </Box>
        </>
  );
};

export default FooterPublic;
