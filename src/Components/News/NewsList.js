import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { Box, SimpleGrid, GridItem } from '@chakra-ui/react';
import { getNews } from '../../Services/newsService';
import Card from '../Card';
=======
import { Box, SimpleGrid, GridItem } from '@chakra-ui/react'
/* import { getNews } from "../../Services/newsService"; */
import Card from "../Card";
>>>>>>> aa2bbad93c2d78f97f78aae5302f0ae1640ee5ae
import '../CardListStyles.css';
import Spinner from '../Spinner/index';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../app/features/newsSlice';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const result = await getNews();
      setNewsList([...result.data]);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  }, []);

<<<<<<< HEAD
  // const list = [
  //     {id: 1, name: 'Titulo '},
  //     {id: 2, name: 'Titulo '},
  //     {id: 3, name: 'Titulo '},
  //     {id: 4, name: 'Titulo '},
  //     {id: 5, name: 'Titulo '},
  // ];
=======
    const dispatch = useDispatch();
    const { news } = useSelector(state => state);

    useEffect(async () => {
        try {
            setLoading(true);
            await dispatch(getAllNews());
        } catch (error) {
            console.log(error);
            setError(true);
        }
        setLoading(false)
    }, [dispatch])


    useEffect(() => {
        setNewsList(news.news)
    }, [news])
>>>>>>> aa2bbad93c2d78f97f78aae5302f0ae1640ee5ae

  return (
        <Box bg='#DB5752' p={4} >
            {loading &&
                <Spinner isLoading color="blue" size={40} />
            }

            {error &&
                showAlertErr()
            }
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
};

export default NewsList;
