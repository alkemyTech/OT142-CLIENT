import { Container, Text, Spinner, Grid, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../app/features/activitiesSlice';
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
        <Container maxW='container.lg'>
            <Text fontSize='5xl' d='flex' justifyContent='center'>Actividades</Text>

            {activitiesReducer.status !== 'success' && <Spinner size='xl' />}

            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {data?.length > 0 &&
                    data.map((activity) => (
                      <Box key={activity.id}>
                        <Card data={activity} />
                      </Box>
                    ))}
            </Grid>
        </Container>
  );
};
export default ActivitiesList;
