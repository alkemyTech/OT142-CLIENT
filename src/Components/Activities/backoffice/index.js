import React, {useState} from 'react'
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
} from '@chakra-ui/react'
import TrTable from './TrTable';
import { Link } from 'react-router-dom';

const BackOfficeActivities = () => {

    const [activities, setactivities] = useState([
        { key: 1, name:'actividad 1', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 2, name:'actividad 2', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 3, name:'actividad 3', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 4, name:'actividad 4', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 5, name:'actividad 5', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 6, name:'actividad 6', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
        { key: 7, name:'actividad 7', image: 'https://agorasocial.com/wp-content/uploads/2019/10/49.-marca-cuestion-de-ideas.jpg', created_at: new Date()},
    ])
    
    return (
        <Container maxW='90%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de actividades</Text>
                <Link to="/backoffice/activities/create">
                    <Button colorScheme='green'>
                        Crear nueva actividad
                    </Button>
                </Link>
            </Box>

            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>name</Th>
                        <Th>image</Th>
                        <Th>createdAt</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        activities.map(activitie => {

                            return <TrTable 
                                key={activitie.id} 
                                name={activitie.name}
                                image={activitie.image}
                                createdAt={activitie.created_at}
                            />

                        })
                    }
                </Tbody>
            </Table>

        </Container>
    )
}

export default BackOfficeActivities