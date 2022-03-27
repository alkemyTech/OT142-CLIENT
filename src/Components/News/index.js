import NewsList from './NewsList';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Searchbar from '../../utils/Searchbar';
import { debouncer } from '../../utils/debouncer';
import { getAllNews, filterNews } from '../../app/features/newsSlice';
import { Heading, Box } from '@chakra-ui/react';
// import { getAllNews } from '../../app/features/newsSlice';

export const News = () => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 3) {
      dispatch(filterNews(e.target.value));
    } else {
      dispatch(getAllNews());
    }
  };

  return (
    <>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Heading as='h2' size='md' textAlign='center' mb={3}>Novedades</Heading>
        <Searchbar handleChange={debouncer(handleChange)} />
        <NewsList newsList={news.news || []} loading={news.newsLoading} error={news.newsError}/>
      </Box>
    </>

  );
};
