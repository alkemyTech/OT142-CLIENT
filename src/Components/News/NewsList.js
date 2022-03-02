import React from 'react';
import { Box,SimpleGrid, GridItem} from '@chakra-ui/react'

import '../CardListStyles.css';

const NewsList = () => {  

    const list = [
        {id: 1, name: 'Titulo '},
        {id: 2, name: 'Titulo '},
        {id: 3, name: 'Titulo '},
        {id: 4, name: 'Titulo '},
        {id: 5, name: 'Titulo '},
    ];

    return (
        <Box bg='#DB5752'  p={4} >
            <SimpleGrid columns={[2, 4, 5]}  spacing='30px' m='50px'>
                {
                    list.length>0 
                    ? list.map((news) =>(
                            <GridItem 
                                w='100%' 
                                bg='#9AC9FB' 
                                key={news.id} 
                                maxHeight='250px' 
                                textAlign='center'>
                                    {/* <Card ...props/> */}                                    
                                    {news.name}                                                           
                            </GridItem>                            
                    ))
                    : <p>No hay novedades</p>
                }
            </SimpleGrid>
        </Box>        
    );
}
 
export default NewsList;