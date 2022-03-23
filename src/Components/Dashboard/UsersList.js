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
  Spinner,
  FormControl,
  Input
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUsersList, getUserFromName, renderUserList, deletetUsersApi } from '../../app/features/UsersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  const userStatus = useSelector(state => state.users.status);

  const handleDelete = (id) => {
    dispatch(deletetUsersApi(id));
    dispatch(renderUserList(id));
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      dispatch(getUserFromName(e.target.value));
    } else {
      dispatch(getUsersList());
    }
  };

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(getUsersList());
    }
  }, [userStatus, dispatch]);

  return (
    <Flex bg='gray.200' flexDirection="column" alignItems='center' p="2">
      ¿Deseas crear un nuevo usuario? <Text textColor="blue.400"><Link to="/backoffice/users/create">Crear usuario</Link></Text>

      <Flex mt='2'>
        <FormControl>
          <Input
            onChange={handleChange}
            bg='white'
            type='search'
            placeholder='Buscar usuario' />
        </FormControl>
      </Flex>

      {userStatus === 'loading' &&
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      }

      <Table variant="simple" size="sm" maxW="500px" mt="4">
        <TableCaption>Gestión de usuarios</TableCaption>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.length > 0
            ? users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Flex justifyContent="center" alignItems="center">
                    <Button onClick={() => handleEdit(user.id)} colorScheme="blue" size="sm">Editar</Button>
                    <Button onClick={() => handleDelete(user.id)} colorScheme="red" size="sm" ms="1">Eliminar</Button>
                  </Flex>
                </Td>
              </Tr>
            ))
            : <Tr><Td>No hay usuarios</Td></Tr>}
        </Tbody>
      </Table>
    </Flex>
  );
};
export default UserList;
