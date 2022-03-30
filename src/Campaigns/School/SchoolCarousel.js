import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Heading } from '@chakra-ui/react';
import imageOne from '../School/Assets/SchoolImage1.jpg';
import imageTwo from '../School/Assets/SchoolImage2.jpg';
import imageThree from '../School/Assets/SchoolImage3.jpg';

const SchoolCarousel = () => {
  const sliderContent = [
    {
      title: 'Asistiendo a los niños',
      description:
        'En la última campaña, hemos recolectado más de mil útiles escolares.',
      image: imageOne
    },
    {
      title: 'Encuentro artístico',
      description:
        'Los niños exploran su creatividad a través del arte y sus nuevos útiles ',
      image: imageTwo
    },
    {
      title: 'Seguimos integrando',
      description:
        'En nuestras campañas buscamos el acompañamiento de todas y todos, desde la concepción social que no estamos solos, que somos comunidad y eso nos compromete con la realidad de nuestra ciudad y sus necesidades.',
      image: imageThree
    }
  ];

  return (
    <Carousel autoPlay infiniteLoop interval={5000} transitionTime={1400}>
      {sliderContent.map((slide) => {
        return (
          <>
            <Box
              height={'lg'}
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              backgroundImage={slide.image}
            >
              <Box
                bottom={0}
                left={0}
                right={0}
                ml={'auto'}
                mr={'auto'}
                position='absolute'
                width='40%'
                bg='blue.200'
                mb={7}
                p={3}
                opacity={'90%'}
                borderRadius={'2px'}
                display={{ base: 'none', md: 'none', lg: 'initial' }}
              >
                <Heading>{slide.title}</Heading>
                <Text fontSize={'lg'} color='gray.700' fontWeight='bold'>
                  {slide.description}
                </Text>
              </Box>
            </Box>
          </>
        );
      })}
    </Carousel>
  );
};

export default SchoolCarousel;
