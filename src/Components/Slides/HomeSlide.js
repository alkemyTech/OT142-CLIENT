import React, { useCallback, useEffect, useState } from 'react';
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
import { get } from '../../Services/publicApiService';
import RenderHtml from '../RenderHtml';

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

const CarouselSlides = () => {
  const [slider, setSlider] = useState(null);
  const [slideData, setSlideData] = useState();

  const getDataSlide = useCallback(async () => {
    try {
      const { data } = await get('/slides');
      setSlideData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getDataSlide();
  }, []);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
    >
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
        onClick={() => slider?.slickPrev()}
      >
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
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {slideData?.length > 0 &&
          slideData.map((card) => (
          <Box
            key={card.id}
            height={'lg'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={card.image}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.md"
              height="600px"
              w={{ base: '250px', sm: '400px' }}
              centerContent
              position="relative"
            >
              <Stack
                spacing={6}
                w={'full'}
                maxW={{ base: 'lg' }}
                position="absolute"
                top={{ base: '22%', sm: 110, lg: 180 }}
                left={{ base: '-2%', sm: -5, md: -155, lg: -250 }}
                border="1px solid"
                borderRadius="5px"
                padding="0.5rem"
                backgroundColor="rgba(0,0,0,0.5)"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: 'md', md: '4xl', lg: '5xl' }}
                  color="yellow"
                >
                  {card.name}
                </Heading>
                <Text
                  fontSize={{ base: 'sm', lg: 'lg' }}
                  color="white"
                  fontWeight="bold"
                >
                  <RenderHtml htmlText={card.description}/>
                </Text>
              </Stack>
            </Container>
          </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default CarouselSlides;
