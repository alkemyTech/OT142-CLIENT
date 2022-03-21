import { Text, Spinner, SimpleGrid, Box, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../app/features/activitiesSlice';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import Card from '../Card';

const ActivitiesList = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { activitiesReducer } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  useEffect(() => {
    setData(activitiesReducer.activities);
  }, [activitiesReducer]);

  return (
        <Box bg='#F8F9FA' p={4} width="100%">
            <Text fontSize='5xl' d='flex' justifyContent='center'>Actividades</Text>

            {activitiesReducer.status !== 'success' && <Spinner color="blue" size='xl' />}
            {activitiesReducer.status === 'failed' && showAlertErr()}

            <SimpleGrid columns={[1, 2, 3, 4]} spacing='30px' m='10px'>
                {
                  data.length > 0
                    ? data.map((activity) => (
                      <GridItem
                        key={activity.id}
                        w='100%'
                        textAlign='center'>
                          <Card data={activity} />
                      </GridItem>
                    ))
                    : <Box>
                        <Text>No hay actividades</Text>
                      </Box>
                    }
            </SimpleGrid>
        </Box>
  );
};
export default ActivitiesList;
