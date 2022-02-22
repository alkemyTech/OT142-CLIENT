import { Button, Image, Box, Container, Text, Heading, Spinner, Grid } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../hooks/API';

const Activities = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const history = useHistory();

    console.log(data);

    const handleActivity = (id) => {
        history.push(`/actividades/${id}`);
    }

    const getData = useCallback (async () => {
        try {
            const {data} = await API.get();
            setData(data.data);
            setLoading(false);
        } catch (e) {
            setError(true);
        }
    }, [])

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <Container>
            <Heading as='h1' d="flex" justifyContent="center">
                Actividades
            </Heading>
            <Text as='h2' d="flex" justifyContent="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </Text>

            {loading == true &&  <Spinner size='xl' /> }

            <Grid bg="grey" maxW="150px" alignItems="center" flexDirection="column">
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
                            <Image boxSize='100px' src={activity.image}/>
                        </Box>
                        <Button variant='solid' size='xs' onClick={() => handleActivity(activity.id)}>Ver Detalle</Button>
                    </Box>
                ))}
            </Grid>
        </Container>
        )
}
 
export default Activities;