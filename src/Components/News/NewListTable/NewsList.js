import React, { useState } from 'react';
import NewListTable from './NewListTable';

const NewsList = () => {
    const newsMock = [
        { id: 1, name: 'Nombre de prueba 1', image: 'Imagen de prueba 1', createdAt: 'Descripcion de prueba 1' },
        { id: 2, name: 'Nombre de prueba 2', image: 'Imagen de prueba 2', createdAt: 'Descripcion de prueba 2' },
        { id: 3, name: 'Nombre de prueba 3', image: 'Imagen de prueba 3', createdAt: 'Descripcion de prueba 3' }
    ];

    const [data] = useState(newsMock);

    return (
        <>
            {data.length > 0 ?
                <div >
                    <NewListTable data={data} />
                </div>
                :
                <p>No hay novedades</p>
            }
        </>
    );
}

export default NewsList;