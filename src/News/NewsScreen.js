import React, { useState } from 'react'
import Title from '../Components/Titles/Titles'
import { Box,SimpleGrid, GridItem } from '@chakra-ui/react'

export const NewsScreen = () => {
    const [news, setNews] = useState(['new1','new2','new3', 'new4','new5', 'new6', 'new7', 'new8','new9', 'new10'])
    return (
        <>
        <Title text={"Novedades"}/>

        <Box bg='#DB5752'  p={4} >
            <SimpleGrid columns={[2, 4, 5]}  spacing='30px' m='50px'>
                {
                    news.map((news, index) =>(
                            <GridItem w='100%' bg='#9AC9FB' key={index} maxHeight='100px' textAlign='center'>
                                {/* <Card ...props/> */}
                                {news}
                            </GridItem>                            
                    ))
                }
            </SimpleGrid>
        </Box>
        </>
    )
}
