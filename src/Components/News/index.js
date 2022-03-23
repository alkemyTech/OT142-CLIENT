import Title from '../Titles';
import NewsList from './NewsList';
// import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { getAllNews } from '../../app/features/newsSlice';

export const News = () => {
  const { news } = useSelector(state => state);
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
            <Title children="Novedades"/>
            <NewsList newsList={news.news || []} loading={news.newsLoading} error={news.newsError}/>
        </>
  );
};
