import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  // Td,
  // TableCaption,
  Button,
  Box,
  // Flex,
  Text,
  // Spinner,
  Container
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUsersList, renderUserList, deletetUsersApi } from '../../app/features/UsersSlice';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const UserList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const users = useSelector(getAllUsers);

  const userStatus = useSelector(state => state.users.status);

  const handleDelete = (id) => {
    dispatch(deletetUsersApi(id));
    dispatch(renderUserList(id));
  };

  const handleEdit = (user) => {
    history.push({
      pathname: 'edit-user',
      state: user
    });
  };

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(getUsersList());
    }
  }, [userStatus, dispatch]);

  return (
    <Container maxW='100%'>

      <Box mb={5}>
        <Text fontSize='6xl'>Backoffice de Usuarios</Text>
        <Button onClick={() => history.push('/backoffice/create-user')} colorScheme='green'>
          Crear nuevo usuario
        </Button>
      </Box>

      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Nombre</Th>
            <Th>Email</Th>
            <Th>Acción</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            users.map(user => (
              <Tr key={user.id}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <Stack spacing={2}>
                    <Box>
                      <Button onClick={() => handleEdit(user)} colorScheme='blue'>
                        <AiFillEdit />
                      </Button>
                    </Box>
                    <Box>
                      <Button onClick={() => handleDelete(user.id)} colorScheme='red'>
                        <AiFillDelete />
                      </Button>
                    </Box>
                  </Stack>
                </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </Container>
  );
};
export default UserList;

// return (
//   <Container maxW='container.xl' mx="auto" p={4}>
//     <Flex flexDirection="column" justifyContent="center" alignItems="center" p="2">
//         ¿Deseas crear un nuevo usuario? <Text textColor="blue.400"><Link to="create-user">Crear usuario</Link></Text>

//         {userStatus === 'loading' &&
//             <Spinner
//                 thickness='4px'
//                 speed='0.65s'
//                 emptyColor='gray.200'
//                 color='blue.500'
//                 size='xl'
//             />
//         }

//         <Table variant="simple" size="sm" maxW="500px" mt="4">
//             <TableCaption>Gestión de usuarios</TableCaption>
//             <Thead>
//                 <Tr>
//                     <Th>Nombre</Th>
//                     <Th>Email</Th>
//                     <Th>Acciones</Th>
//                 </Tr>
//             </Thead>
//             <Tbody>
//                 {users.length > 0
//                   ? users.map((user) => (
//                     <Tr key={user.id}>
//                         <Td>{user.name}</Td>
//                         <Td>{user.email}</Td>
//                         <Td>
//                             <Flex justifyContent="center" alignItems="center">
//                                 <Button onClick={() => handleEdit(user)} colorScheme="blue" size="sm">Editar</Button>
//                                 <Button onClick={() => handleDelete(user.id)} colorScheme="red" size="sm" ms="1">Eliminar</Button>
//                             </Flex>
//                         </Td>
//                     </Tr>
//                   ))
//                   : <Tr><Td>No hay usuarios</Td></Tr>}
//             </Tbody>
//         </Table>
//     </Flex>
//     </Container>
// );
