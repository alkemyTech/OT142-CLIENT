import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

import pic1 from '../../Assets/pic1-test.jpg';
import pic2 from '../../Assets/pic2-test.jpg';
import pic3 from '../../Assets/pic3-test.jpg';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function CarouselSlides (slidesData) {
  const [slider, setSlider] = useState(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Nosotros',
      description:
        'Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social.',
      image:
        pic1
    },
    {
      title: 'Visión',
      description:
        'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.',
      image:
        pic2
    },
    {
      title: 'Misión',
      description:
        'Trabajar articuladamente con los distintos aspectos de la vida de las familias,generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.',
      image:
        pic3
    }
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        charSet='UTF-8'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />
      {/* Left Icon */}
      <IconButton
        aria-label='left-arrow'
        variant='ghost'
        position='absolute'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size='40px' />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label='right-arrow'
        variant='ghost'
        position='absolute'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size='40px' />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'lg'}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size='container.md' height='600px' w={{ base: '250px', sm: '400px' }} centerContent position='relative'>
              <Stack
                spacing={6}
                w={'full'}
                maxW={{ base: 'lg' }}
                position='absolute'
                top={{ base: '22%', sm: 110, lg: 150 }}
                left={{ base: '-2%', sm: -5, md: -155, lg: -250 }}
                border='1px solid'
                borderRadius='5px'
                padding='0.5rem'
                backgroundColor='rgba(0,0,0,0.5)'
                transform='translate(0, -50%)'>
                <Heading fontSize={{ base: 'md', md: '4xl', lg: '5xl' }}
                  color='yellow'
                >
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color='white' fontWeight='bold'>
                  {card.description}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
