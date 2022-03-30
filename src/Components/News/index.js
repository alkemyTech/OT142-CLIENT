import NewsList from './NewsList';
// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LastEvent from './LastEvent';
// import { Heading } from '@chakra-ui/react';
// import { getAllNews } from '../../app/features/newsSlice';
import Title from '../Titles';

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
    <>
      <Title>Novedades</Title>
      <LastEvent video={'https://youtu.be/4YnSk1gI_Oo'} />
      <NewsList
        newsList={news.news || []}
        loading={news.newsLoading}
        error={news.newsError}
      />
    </>
  );
};

export default News;
