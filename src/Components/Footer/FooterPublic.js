import React, { useEffect, useState } from 'react';
import {
  Container,
  Image,
  Box,
  Stack,
  Show,
  Heading,
  VStack
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
  }, []);

  return (
        <>
            <div style={{
              clipPath: 'polygon(0 0%, 0% 100%, 100% 100%)',
              background: '#CBD5E0',
              width: '100%',
              height: '40px',
              margin: '-1px',
              marginTop: '150px'
            }}></div>
            <Container bg='gray.300' padding='4' maxW='100%'>
                <footer>
                    <Stack
                        spacing='24px'
                        alignItems="center"
                        direction={['column', 'column', 'row']}
                    >
                        <Box flex={1} p={4} display="flex" flexDirection="column" alignItems="center">
                            <Show above='md'>
                                <Heading fontSize={{ base: '18px', sm: '1.4em', lg: '2em' }} textAlign="center">
                                    <a href='#'>
                                        {organization.name || 'Bienvenido a Somos Más!!'}
                                    </a>
                                </Heading>
                            </Show>
                            <Image src={organization.logo || logo} alt={organization.short_description} />
                        </Box>
                        <Show above='md'>
                            <Box flex={1} p={4}>
                                <Stack direction={['row']} justifyContent='space-around' alignItems='flex-end'>
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
                                    <Show above='2xl'>
                                        <VStack>
                                            <Heading as='h2' fontSize={{ base: '18px', sm: '1.4em', lg: '1.8em' }}>Campañas</Heading>
                                            <nav className='nav-footer'>
                                                <ul>
                                                    <li>
                                                        <Link>Escuelas</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Juguetes</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Actividades</Link>
                                                    </li>
                                                    <li>
                                                        <Link>Testimonios</Link>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </VStack>
                                    </Show>
                                </Stack>
                            </Box>
                        </Show>
                        <Stack flex={1} p={4} direction={['column', 'column', 'row']}>
                            <a href={organization.twitter_url} className="links tw">
                                <AiOutlineTwitter />
                                <Show above='lg'>
                                    <span>Twitter</span>
                                </Show>
                            </a>
                            <a href={organization.facebook_url} className="links fb">
                                <AiFillFacebook />
                                <Show above='lg'>
                                    <span>Facebook</span>
                                </Show>
                            </a>
                            <a href={organization.linkedin_url} className="links ln">
                                <AiFillLinkedin />
                                <Show above='lg'>
                                    <span>LinkedIn</span>
                                </Show>
                            </a>
                            <a href={organization.instagram_url} className="links ig">
                                <AiFillInstagram />
                                <Show above='lg'>
                                    <span>Instagram</span>
                                </Show>
                            </a>
                        </Stack>
                    </Stack>
                </footer>
            </Container>
        </>
  );
};

export default FooterPublic;
