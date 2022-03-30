import { useState, useEffect } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button,
  FormControl,
  Input
} from '@chakra-ui/react';
import TrTable from '../../../utils/TrTable';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteActivities, getAllActivities, deleteActivity, getOnChangeActivities } from '../../../app/features/activitiesSlice';
import { useDebounceSearch } from '../../../../src/hooks/useDebounceSearch';

const BackOfficeActivities = () => {
  const [valuesSearch, setValuesSearch] = useState('');
  const searchValues = useDebounceSearch(valuesSearch);

  const dispatch = useDispatch();
  const { activities } = useSelector(state => state);
  const history = useHistory();

  useEffect(async () => {
    dispatch(await getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOnChangeActivities(searchValues));
  }, [dispatch, searchValues]);

  const handleDelete = (id) => {
    console.log('delete :' + id);
    // comentar esta asi no modifica la api
    dispatch(deleteActivity(id));
    dispatch(deleteActivities(id));
  };

  const handleChange = (e) => {
    setValuesSearch(e.target.value);
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
                <Button onClick={() => history.push('/backoffice/activities/create')} colorScheme='green'>
                    Crear nueva actividad
                </Button>
            </Box>

            <FormControl>
                <Input
                  onChange={handleChange}
                  bg='white'
                  type='search'
                  placeholder='Buscar Actividad'
                  width='30%'/>
              </FormControl>

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
