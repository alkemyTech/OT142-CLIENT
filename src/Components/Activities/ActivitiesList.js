import { Button, Image, Box, Container, Text, Heading, Spinner, Grid } from '@chakra-ui/react';
import Title from '../Titles';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../app/features/activitiesSlice';
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

  const history = useHistory();

  const handleActivity = (id) => {
    history.push(`/actividades/${id}`);
  };

  return (
        <Container maxW='container.lg'>
            <Title>Actividades</Title>

            {activitiesReducer.status !== 'success' && <Spinner size='xl' />}

            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
                {data?.length > 0 &&
                    data.map((activity) => (
                        <Box key={activity.id}>
                            <Heading as='h3'>
                                {activity.name}
                            </Heading>
                            <Text>
                                {activity.description}
                            </Text>
                            <Box>
                                <Image boxSize='100px' src={activity.image} />
                            </Box>
                            <Button variant='solid' size='xs' onClick={() => handleActivity(activity.id)}>Ver Detalle</Button>
                        </Box>
                    ))}
            </Grid>
        </Container>
  );
};
export default ActivitiesList;
