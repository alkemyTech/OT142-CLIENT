import React from 'react'
import { Link } from "react-router-dom";

import {
  Box,
  Center,
  Heading, 
  useColorModeValue,
  Circle,
  Button,
  
} from '@chakra-ui/react';

export const Card = ({data}) => {
    const {Icon,title,link} = data   
    
    return (
    <div>
    <Center py={6}>
        <Box
            maxW={'400px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>            
   
                <Center >
                    <Circle size='60px' bg='gray.400'  padding={2}>
                        <img src={Icon} width={35} />                       
                    </Circle>
                </Center>   
                
                <Center marginTop={2}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'sm'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                </Center>

                 <Center
                    marginTop={2}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}>
                        <Button colorScheme='teal' size='xs'>
                           <Link to={link} >Ir</Link>
                        </Button>
                  </Center>           
        </Box>
        </Center>

    </div>
  )
}
