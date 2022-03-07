import { Button, Image, Box, Container, Text, Heading, Spinner, Grid } from '@chakra-ui/react';
import Title from '../../../Components/Titles'
import { useHistory } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { get } from "../../../Services/publicApiService";

const ActivitiesList = () => {


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    console.log(data);

    const getData = useCallback(async () => {
        try {
            const { data } = await get("/activities");
            setData(data.data);
            setLoading(false);
        } catch (e) {
            setError(true);
        }
    }, [])

    useEffect(() => {
        getData();
    }, [getData]);

    const history = useHistory();

    const handleActivity = (id) => {
        history.push(`/actividades/${id}`);
    }

    return (
        <Container maxW='container.lg'>
            <Title>Actividades</Title>

            {loading === true && <Spinner size='xl' />}

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
    )
}
export default ActivitiesList;
