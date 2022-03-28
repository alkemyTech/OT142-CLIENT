import NewsList from './NewsList';
// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
import LastEvent from './LastEvent';
=======
import { Heading } from '@chakra-ui/react';
>>>>>>> 41c438771244dadaad753ffa96b663b1800cdc69
// import { getAllNews } from '../../app/features/newsSlice';

export const News = () => {
  const { news } = useSelector((state) => state);
  // const [newsList, setNewsList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

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
<<<<<<< HEAD
    <>
      <Title children='Novedades' />
      <LastEvent video={'https://youtu.be/4YnSk1gI_Oo'} />
      <NewsList
        newsList={news.news || []}
        loading={news.newsLoading}
        error={news.newsError}
      />
    </>
=======
        <>
            <Heading as='h2' size='md' textAlign='center' mb={3}>Novedades</Heading>
            <NewsList newsList={news.news || []} loading={news.newsLoading} error={news.newsError}/>
        </>
>>>>>>> 41c438771244dadaad753ffa96b663b1800cdc69
  );
};

export default News;
