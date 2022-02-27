import React, { useState } from 'react'
import Title from '../Components/Titles/'
import { Box,SimpleGrid, GridItem,  ListItem, UnorderedList } from '@chakra-ui/react'

export const NewsScreen = () => {
     const newsList = [
        {id: 1, name: 'Titulo ', description: 'Descripcion '},
        {id: 2, name: 'Titulo ', description: 'Descripcion '},
        {id: 3, name: 'Titulo ', description: 'Descripcion '},
        {id: 4, name: 'Titulo ', description: 'Descripcion '},
        {id: 5, name: 'Titulo ', description: 'Descripcion '},
    ];
    return (
        <>
        <Title children="Novedades"/>

        <Box bg='#DB5752'  p={4} >
            <SimpleGrid columns={[2, 4, 5]}  spacing='30px' m='50px'>
                {
                    newsList.length>0 
                    ?
                    newsList.map((news) =>(
                            <GridItem 
                                w='100%' 
                                bg='#9AC9FB' 
                                key={news.id} 
                                maxHeight='250px' 
                                textAlign='center'>
                                    {/* <Card ...props/> */}
                                    <UnorderedList>  
                                        <ListItem>{news.name}</ListItem>
                                        <ListItem>{news.description}  </ListItem>
                                    </UnorderedList>                                                                        
                            </GridItem>                            
                    ))
                    : 
                    <p>No hay novedades</p>
                }
            </SimpleGrid>
        </Box>
        </>
    )
}
