import React, { useState, useEffect } from 'react';
import NewsListTable from './NewsListTable';
import { getNews, deleteNews } from '../../../Services/newsService';

const NewsList = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const news = await getNews();
    setData([...news.data]);
  }, []);

  const handleDeleteNews = (route, id) => {
    deleteNews(route, id);
    const filteredNews = data.filter((novedad) => novedad.id !== id);
    setData(filteredNews);
  };

  return (
    <>
      {data.length > 0
        ? (
        <div>
          <NewsListTable data={data} handleDeleteNews={handleDeleteNews} />
        </div>
          )
        : (
        <p>No hay novedades</p>
          )}
    </>
  );
};

export default NewsList;
