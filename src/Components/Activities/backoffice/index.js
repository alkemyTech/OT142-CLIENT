import React, { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button
} from '@chakra-ui/react';
import TrTable from '../../../utils/TrTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../../app/features/activitiesSlice';

const BackOfficeActivities = () => {
  const [activities, setActivities] = useState([]);
  const dispatch = useDispatch();
  const { activitiesReducer } = useSelector(state => state);

  const handleDelete = () => {
    console.log('delete');
  };

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    if (activitiesReducer.status === 'success') {
      setActivities(activitiesReducer.activities);
    }
  }, [activitiesReducer]);

  return (
        <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de Actividades</Text>
                <Link to="/backoffice/activities/create">
                    <Button colorScheme='green'>
                        Crear nueva actividad
                    </Button>
                </Link>
            </Box>

            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Imagen</Th>
                        <Th>Fecha de Creación</Th>
                        <Th>Acción</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        activities.map(activitie => {
                          return <TrTable
                                key={activitie.id}
                                id={activitie.id}
                                name={activitie.name}
                                image={activitie.image}
                                createdAt={activitie.created_at}
                                handleDelete={handleDelete}
                                path={'activities/'}
                            />;
                        })
                    }
                </Tbody>
            </Table>

        </Container>
  );
};

export default BackOfficeActivities;
