import Title from '../Titles';
import NewsList from './NewsList';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LastEvent from './LastEvent';
import { getAllNews, filterNews } from '../../app/features/newsSlice';
import Searchbar from '../../utils/Searchbar';
import { debouncer } from '../../utils/debouncer';
import { Box } from '@chakra-ui/react';

export const News = () => {
  const { news } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [newsList, setNewsList] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

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
      <Title children='Novedades' />
      <LastEvent video={'https://youtu.be/4YnSk1gI_Oo'} />
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <Searchbar handleChange={debouncer(handleChange)} />
      <NewsList
        newsList={news.news || []}
        loading={news.newsLoading}
        error={news.newsError}
        handleChange={handleChange}
      />
      </Box>
    </>
  );
};

export default News;
