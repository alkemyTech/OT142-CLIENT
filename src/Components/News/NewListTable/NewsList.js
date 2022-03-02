import React, { useState, useEffect } from 'react';
import NewsListTable from './NewsListTable';
import { getNews, deleteNews } from "../../../Services/newsService";

const NewsList = () => {
    // const newsMock = [
    //     { id: 1, name: 'Nombre de prueba 1', image: 'Imagen de prueba 1', createdAt: 'Descripcion de prueba 1' },
    //     { id: 2, name: 'Nombre de prueba 2', image: 'Imagen de prueba 2', createdAt: 'Descripcion de prueba 2' },
    //     { id: 3, name: 'Nombre de prueba 3', image: 'Imagen de prueba 3', createdAt: 'Descripcion de prueba 3' }
    // ];

    const [data, setData] = useState([]);
    useEffect(async () => {
      const news = await getNews("news");
      setData([...news.data]);
      
    }, [])
    
    const handleDeleteNews = (route, id) => {
        deleteNews(route, id);
        const filteredNews = data.filter(novedad => novedad.id !== id)
        setData(filteredNews);
    }
    

    return (
        <>
            {data.length > 0 ?
                <div >
                    <NewsListTable data={data}  handleDeleteNews={handleDeleteNews}/>
                </div>
                :
                <p>No hay novedades</p>
            }
        </>
    );
}

export default NewsList;