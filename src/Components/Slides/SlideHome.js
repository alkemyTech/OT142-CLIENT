import React, { useState, useEffect } from 'react';
import {
  Box,
  Center,
  Image,
  Text,
  Fade,
  ScaleFade,
  Slide,
  SlideFade
} from '@chakra-ui/react';

// Agregar animaciones con framer motion
const HomeCarousel = () => {
  const [count, setCount] = useState(0);

  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/239/200/300'
  ];

  useEffect(() => {
    const timerId = setInterval(() => {
      if (count === images.length - 1) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 5000);

    return () => clearInterval(timerId);
  }, [count]);

  const image = images[count];

  return (
    <Box>
      <Center>
        <Box width='100%' height={'50%'} bg='black'>
          <Center>
            <Image width='auto' height='50vh' src={image} />
            <Box
              position='absolute'
              width='40%'
              bg='rgba(255,0,0,0.5)'
              alignSelf={'end'}
              mb={2}
              p={3}
              opacity={40}
              borderRadius={'2px'}
            >
              Prueba
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias aspernatur dicta, odit sequi rerum officia
                dignissimos, quibusdam fugiat aut amet pariatur! Labore magni
                voluptatibus possimus hic porro optio eveniet dignissimos!
              </Text>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default HomeCarousel;
