import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, GridItem } from '@chakra-ui/react'
import { getNews } from "../../Services/newsService";
import Card from "../Card";
import axios from "axios";

import '../CardListStyles.css';

const NewsList = () => {

    const [newsList, setNewsList] = useState([]);

    useEffect(async () => {
        const result = await getNews();
        setNewsList([...result.data]);

    }, [])


    /*     axios.get('https://ongapi.alkemy.org/api/news')
            .then(function (response) {
                // handle success
                setNewsList(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            }) */



    // const list = [
    //     {id: 1, name: 'Titulo '},
    //     {id: 2, name: 'Titulo '},
    //     {id: 3, name: 'Titulo '},
    //     {id: 4, name: 'Titulo '},
    //     {id: 5, name: 'Titulo '},
    // ];

    return (
        <Box bg='#DB5752' p={4} >
            <SimpleGrid columns={[2, 4, 5]} spacing='30px' m='50px'>
                {
                    newsList.length > 0
                        ? newsList.map((news) => (
                            <GridItem
                                w='100%'
                                bg='#9AC9FB'
                                key={news.id}
                                maxHeight='250px'
                                textAlign='center'>
                                <Card data={news} />
                                {/* {news.name}                                                            */}
                            </GridItem>
                        ))
                        : <p>No hay novedades</p>
                }
            </SimpleGrid>
        </Box>
    );
}

export default NewsList;