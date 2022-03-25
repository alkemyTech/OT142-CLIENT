import React, { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Text,
  Container,
  Box,
  Button,
  Select
} from '@chakra-ui/react';
import TrTable from '../../Activities/backoffice/TrTable';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from '../../../app/features/newsSlice';

const BackOfficeActivities = () => {
  const dispatch = useDispatch();
  const { news } = useSelector(state => state);
  const [selectedValue, setSelectedValue] = useState('');
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  console.log('value', selectedValue);

  return (
     <Container maxW='100%'>

            <Box mb={5}>
                <Text fontSize='6xl'>Backoffice de Actividades</Text>
                <Link to="/backoffice/activities/create">
                    <Button colorScheme='green'>
                        Crear nueva actividad
                    </Button>
                </Link>
            </Box>
            <Box>
              <Text>Selecione una categoría</Text>
                <Select value={selectedValue} placeholder='Buscar por categoría' onChange={(e) => setSelectedValue(e.target.value)}>
                  <option value='option1'>Categorías</option>
                  <option value='option2'>Niños</option>
                  <option value='option3'>Adolescente</option>
                  <option value='option3'>Donaciones</option>
                  <option value='option3'>Animales</option>
                </Select>
            </Box>
            {selectedValue === 'option1'
              ? <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nombre</Th>
                        <Th>Imagen</Th>
                        <Th>Fecha de Creación</Th>
                        <Th>Acción</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        news.news.map(activitie => {
                          return <TrTable
                                key={activitie.id}
                                name={activitie.name}
                                image={activitie.image}
                                createdAt={activitie.created_at}
                            />;
                        })
                    }
                </Tbody>
            </Table>
              : null };
        </Container>
  );
};

export default BackOfficeActivities;
