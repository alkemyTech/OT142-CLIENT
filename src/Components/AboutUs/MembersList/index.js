import React from 'react'
import { API_MEMBERS } from '../hooks/API';
import { useState, useCallback, useEffect } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Spinner
  } from '@chakra-ui/react'

const MembersList = () => {
    
    const [data, setData] = useState();
    const [error, setError] = useState();


        const getData = useCallback (async () => {
            try {
                const { data } = await API_MEMBERS.get();
                setData(data.data);
            } catch (e) {
                setError(e);
            }
        });

        useEffect(() => {
            getData();
        }, []);

    return (
        <Table variant="striped" size="sm" colorScheme="blue">
            <TableCaption>Listado de miembros</TableCaption>
            <Thead>
                <Tr>
                <Th>Nombre</Th>
                <Th>Imagen</Th>
                <Th>Descripcion</Th>
                <Th>Facebook</Th>
                <Th>Linkedin</Th>
                </Tr>
            </Thead>
            <Tbody>
                {data?
                    data.map((member) => (
                    <Tr>
                        <Td>{member.name}</Td>
                        <Td>{member.image}</Td>
                        <Td>{member.description}</Td>
                        <Td>{member.facebookUrl}</Td>
                        <Td>{member.linkedinUrl}</Td>
                    </Tr> 
                    )) : <Spinner d="flex" size="xl"/>}
            </Tbody>
            </Table>
    )
}
 
export default MembersList;