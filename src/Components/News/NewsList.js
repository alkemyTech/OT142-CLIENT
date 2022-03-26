// import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, GridItem, Text } from '@chakra-ui/react';
/* import { getNews } from "../../Services/newsService"; */
import Card from '../Card';
import '../CardListStyles.css';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
/* import { getNews } from "../../Services/newsService"; */
import Spinner from '../Spinner/index';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllNews } from '../../app/features/newsSlice';

const NewsList = ({ newsList, loading, error }) => {
  // const [newsList, setNewsList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  /*   useEffect(async () => {
      try {
        setLoading(true);
        const result = await getNews();
        setNewsList([...result.data]);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }, []); */

  // const dispatch = useDispatch();
  // const { news } = useSelector(state => state);

  // useEffect(async () => {
  //   try {
  //     setLoading(true);
  //     await dispatch(getAllNews());
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   }
  //   setLoading(false);
  // }, [dispatch]);

  // useEffect(() => {
  //   setNewsList(news.news);
  // }, [news]);

  return (
    <Box bg='#F8F9FA' p={4} width="100%">
      {loading &&
        <Spinner isLoading color="blue" size={40} />
      }

      {error &&
        showAlertErr()
      }
      <SimpleGrid columns={{ sm: '1', md: '2', lg: '3', xl: '4' }} spacing='30px' alignItems={'center'}>
        {
          newsList.length > 0
            ? newsList.map((news) => (
              <GridItem
                w='100%'
                // bg='#9AC9FB'
                key={news.id}
                // maxHeight='400px'
                textAlign='center'>
                <Card data={news} />
                {/* {news.name}                                                            */}
              </GridItem>
            ))
            // : <p>No hay novedades</p>
            : <Box>
                <Text>No hay novedades</Text>
            </Box>
        }
      </SimpleGrid>
    </Box>
  );
};

export default NewsList;
