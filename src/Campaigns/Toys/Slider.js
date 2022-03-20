import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue, Stack, Text, Container, useMediaQuery } from '@chakra-ui/react';
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

const ToysSlider = () => {
  const [slider, setSlider] = useState(null);
  const [isLargerThan767] = useMediaQuery('(min-width: 767px)');
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      text: 'Podemos considerar la ultima campaña de donación juguetes como todo un exito! conseguimos 5234!',
      image: pic1
    },
    {
      text: 'La proxima semana se dara el tercer encuentro de partidos de futbol entre las escuelas secundarias❗❗',
      image: pic2
    },
    {
      text: 'Example text 3',
      image: pic3
    }
  ];

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
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
            height={'6xl'}
            position='relative'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={card.image}
            w={{ base: '250px', sm: '400px' }}>
            {isLargerThan767
              ? (
              <Container
                size='container.md'
                height='600px'
                w={{ base: '250px', sm: '400px' }}
                centerContent
                position='relative'>
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
                  transform='translate(0, 350%)'>
                  <Text fontSize={{ base: 'sm', lg: 'lg' }} color='white' fontWeight='bold'>
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
