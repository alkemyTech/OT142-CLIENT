import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, Center, Text } from '@chakra-ui/react'
import pictureMock from './pictureTest.jpg'

export const NewsDetail = ({tittle, news}) => {
  const {id} = useParams();

  return (
    <>
      <Box m='5' maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Center mb='3' ml='2' mr='2'>
          <Heading>{tittle}This is a news tittle </Heading>
        </Center>
        <img src={pictureMock} alt='News img'/>
        <Text fontSize='md' p='2'>{news} Lorem ipsum dolor sit amet consectetur adipiscing elit, pulvinar litora   placerat ornare cubilia maecenas massa, 
        lacinia fermentum nullam malesuada  consequat at. 

        Auctor commodo conubia pellentesque erat tempor id integer   primis donec, montes inceptos posuere condimentum sapien nam vehicula est,  iaculis mollis lacinia parturient netus ornare imperdiet 
        
        dui. Nascetur   aliquam erat condimentum elementum nostra sapien penatibus cras enim congue,  orci volutpat morbi quis litora magnis arcu habitasse sed, quisque ultricies   id interdum turpis eget 
        
        mollis mauris convallis. </Text>
      </Box>
    </>
  )
}
