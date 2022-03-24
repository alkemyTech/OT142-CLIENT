import React, { useState, useEffect, useCallback } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Box, Text, Heading } from '@chakra-ui/react';
import { get } from '../../Services/publicApiService';
import RenderHtml from '../RenderHtml';
import Loader from '../../Components/Loader';

const HomeCarousel = () => {
  const [slideData, setSlideData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getDataSlide = useCallback(async () => {
    try {
      const { data } = await get('/slides');
      setSlideData(data.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getDataSlide();
  }, []);

  return isLoading ? (
    <Loader type='spinner' />
  ) : (
    <Carousel autoPlay infiniteLoop interval={5000} transitionTime={1400}>
      {slideData?.map((slide) => {
        return (
          <>
            <Box
              height={'lg'}
              position='relative'
              backgroundPosition='center'
              backgroundRepeat='no-repeat'
              backgroundSize='cover'
              backgroundImage={slide.image}
              key={slide.id}
            >
              <Box
                bottom={0}
                left={0}
                right={0}
                ml={'auto'}
                mr={'auto'}
                position='absolute'
                width='40%'
                bg='yellow.200'
                mb={7}
                p={3}
                opacity={'90%'}
                borderRadius={'2px'}
                display={{ base: 'none', md: 'none', lg: 'initial' }}
              >
                <Heading>{slide.name}</Heading>
                <Text fontSize={'lg'} color='gray.700' fontWeight='bold'>
                  <RenderHtml htmlText={slide.description} />
                </Text>
              </Box>
            </Box>
          </>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
