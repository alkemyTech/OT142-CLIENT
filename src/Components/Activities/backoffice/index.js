import React, { useEffect } from 'react';
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
import { deleteActivities, getAllActivities, deleteActivity } from '../../../app/features/activitiesSlice';

const BackOfficeActivities = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector(state => state);

  useEffect(async () => {
    dispatch(await getAllActivities());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log('delete :' + id);
    // comentar esta asi no modifica la api
    dispatch(deleteActivity(id));
    dispatch(deleteActivities(id));
  };

  // useEffect(() => {
  //   if (activitiesReducer.status === 'success') {
  //     setActivities(activitiesReducer.activities);
  //   }
  // }, [activitiesReducer]);

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
                        activities.activities.map(activitie => {
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
