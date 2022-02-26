import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Flex,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers } from '../../Services/api/user';

const UserList = () => {

    const [users, setUsers] = useState([]);

    //Funcion de prueba
    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    }

    useEffect(() => {

        getUsers()
            .then(res => res.data)
            .then(data => setUsers(data))

    }, [])
    

    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" p="2">
            ¿Deseas crear un nuevo usuario? <Text textColor="blue.400"><Link to="/backoffice/users/create">Crear usuario</Link></Text>
            <Table variant="simple" size="sm" maxW="500px" mt="4">
                <TableCaption>Gestión de usuarios</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.length > 0 ? users.map((user) => (
                        <Tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>
                                <Flex justifyContent="center" alignItems="center">
                                    <Button colorScheme="blue" size="sm">Editar</Button>
                                    <Button onClick={() => handleDelete(user.id)} colorScheme="red" size="sm" ms="1">Eliminar</Button>
                                </Flex>
                            </Td>
                        </Tr>
                    )) : <Td>No hay usuarios</Td>}
                </Tbody>
            </Table>
        </Flex>

    )
}
export default UserList;