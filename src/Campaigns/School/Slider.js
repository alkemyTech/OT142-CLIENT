import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue, Stack, Text, Container, useMediaQuery } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import pic4 from '../../Assets/pic4-test.jpg';
import pic2 from '../../Assets/pic2-test.jpg';
import pic5 from '../../Assets/pic5-test.jpg';

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

const ToysSlider = () => {
  const [slider, setSlider] = useState(null);
  const [isLargerThan767] = useMediaQuery('(min-width: 767px)');
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      text: 'En la última campaña, hemos recolectado más de mil útiles escolares.',
      image: pic4
    },
    {
      text: 'La próxima semana se realizará el tercer encuentro de partidos de fútbol entre las escuelas secundarias.',
      image: pic2
    },
    {
      text: 'En nuestras campañas buscamos el acompañamiento de todas y todos, desde la concepción social que no estamos solos, que somos comunidad y eso nos compromete con la realidad de nuestra ciudad y sus necesidades.',
      image: pic5
    }
  ];

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            minWidth={'100vw'}
            height={'md'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            objectFit={'cover'}
            backgroundImage={card.image}
            w={{ base: '250px', sm: '400px' }}>
            {isLargerThan767
              ? (
              <Container
                size="container.md"
                height="600px"
                w={{ base: '250px', sm: '400px' }}
                centerContent
                position="relative">
                <Stack
                  spacing={6}
                  w={'full'}
                  maxW={{ base: 'lg' }}
                  position="absolute"
                  // top={'10%'}
                  // left={'-20%'}
                  right={'80%'}
                  bottom={'30%'}
                  border="1px solid"
                  borderRadius="5px"
                  padding="0.5rem"
                  backgroundColor="rgba(0,0,0,0.5)"
                  // transform="translate(0, 350%)"
                  >
                  <Text fontSize={{ base: 'md', lg: 'lg' }} color="white" fontWeight="bold">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
                )
              : null}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ToysSlider;
