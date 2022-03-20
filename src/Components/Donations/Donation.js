import React from 'react';
import IconoMercadoPago from './IconoMercadoPago.png';
import ImagenDonacion1 from './ImagenDonacion1.jpg';
import ImagenDonacion2 from './ImagenDonacion2.jpg';
import ImagenDonacion3 from './ImagenDonacion3.jpg';
import { Link } from 'react-router-dom';
import {
  Container,
  Center,
  Text
} from '@chakra-ui/react';

const Donation = ({ title, firstParagraph, secondParagraph }) => {
  return (
        <>
            <Container maxW='container.md' marginTop={20}>
                <Center marginBottom={5}>
                    <img src={ImagenDonacion1} alt='Imagen Donación' />
                    <img src={ImagenDonacion2} alt='Imagen Donación' />
                    <img src={ImagenDonacion3} alt='Imagen Donación' />
                </Center>
                <Center marginBottom={5}>
                    <Text fontSize='3xl'>{title}</Text>
                </Center>
                <Center marginBottom={5}>
                    <Text fontSize='2xl'>{firstParagraph}</Text>
                </Center>
                <Center marginBottom={5}>
                    <Text fontSize='md'>{secondParagraph}</Text>
                </Center>
                <Center>
                    <Link to='/'>
                        <img src={IconoMercadoPago} alt='Icono MercadoPago' />
                    </Link>
                </Center>
            </Container>
        </>
  );
};

Donation.defaultProps = {
  title: '¡REALIZÁ UNA DONACIÓN!',
  firstParagraph: 'Con tu aporte, más de 700 personas de nuestros programas tienen un futuro mejor.',
  secondParagraph: 'A través del siguiente botón, podrás realizar una donación online a través de un formulario seguro o también puedes contactarte con nosotros escribiéndonos a somosfundacionmas@gmail.com'
};

export default Donation;
