import { Box, Grid, GridItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NewsDetail } from '../Components/News/Detail/NewsDetail'
import NewsList from '../Components/News/NewsList'
import Title from '../Components/Titles/Titles'
import  { AirbnbExample } from './Card'

export const NewsScreen = () => {
    const [news, setNews] = useState(['new1','new2','new3', 'new4','new3', 'new4'])

    return (
        <>
        <Title text={"Novedades"}/>

        <Box bg='black' w='100%' p={4}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {
                    news.map((news, index) =>(
                            <GridItem w='100%' bg='blue.500' key={index}>
                                <NewsDetail tittle={news}/>
                            </GridItem>                            
                    ))
                }
            </Grid>
        </Box>
        </>
    )
}
