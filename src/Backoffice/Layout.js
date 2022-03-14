import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Center,
    SimpleGrid,
    Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Container,
    
  } from '@chakra-ui/react'
  import { AiFillTool } from 'react-icons/ai';
import { Card } from './Card';
import { cardsInfo } from './cardsInfo';

const Layout = () => {
    return (
        <Box bg={'gray.100'} >
            <SimpleGrid columns={[1, 2, 4]} spacing='30px' m={20}>
                {
                    cardsInfo.map((info,i)=>{
                        return (
                            <Card key={i} data={info}/>  
                        )
                    })
                }               
            </SimpleGrid>
        </Box>
    ) 
}

export default Layout