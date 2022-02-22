import { useEffect, useState, useCallback } from "react";
import { Container, Text, Image, Spinner} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import { API } from '../hooks/API';

const ActivityDetail = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState();
    const [error, setError] = useState();
    console.log(id, activity);

    const getData = useCallback (async () => {
        try {
            const {data} = await API.get(`/${id}`)
            setActivity(data.data);
        } catch (e) {
            setError(true);
        }
    }, [])

    useEffect(() => {
        console.log("prueba");
        getData();
    }, [getData]);


    return (
            <>
            {activity? 
            <Container d='flex' justifyContent='center' alignItems='center' flexDirection="column">
                <Text as="h1">
                   {activity.name}
                </Text>
                <Image boxSize={200} src={activity.image}/>
                <Text as="h3" align='center'>
                    {activity.description}
                </Text>
            </Container>
            : <Spinner d="flex" size="xl"/>}
            
            </>
    )
}
 
export default ActivityDetail;