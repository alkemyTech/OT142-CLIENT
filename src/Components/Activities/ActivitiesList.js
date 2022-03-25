import { Text, Spinner, SimpleGrid, Box, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities, getOnChangeActivities } from '../../app/features/activitiesSlice';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import Card from '../Card';
import Searchbar from '../../utils/Searchbar';
import { debouncer } from '../../utils/debouncer';

const ActivitiesList = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 3) {
      dispatch(getOnChangeActivities(e.target.value));
    } else {
      dispatch(getAllActivities());
    }
  };

  return (
        <Box bg='#F8F9FA' p={4} width="100%">
            <Text fontSize='5xl' d='flex' justifyContent='center'>Actividades</Text>
            <Searchbar handleChange={debouncer(handleChange)} />
            {activities.status !== 'success' && <Spinner color="blue" size='xl' />}
            {activities.status === 'failed' && showAlertErr()}

            <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing='30px' m='10px'>
                {
                  activities.activities.length > 0
                    ? activities.activities.map((activity) => (
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
