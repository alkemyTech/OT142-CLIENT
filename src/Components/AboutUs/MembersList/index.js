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
    Center,
    
  } from '@chakra-ui/react'
import { getMembers } from '../../../Services/membersService';
import Spinner from "../../Spinner/index"
import { showAlertErr } from '../../../Services/AlertServicie/AlertServicie';

const MembersList = () => {
    
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading,setLoading] = useState(true)


        const getData = useCallback (async () => {
            try {
                const { data } = await getMembers();
                setData(data.data);
                console.log(data)
                setLoading(false)
            } catch (e) {
                setError(e);
                showAlertErr({text: "Upssss...!! sucedió un error"})
            }
        });

        useEffect(() => {
            getData();
        }, []);

    return (
        <>
        
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
                {
                    (loading)?
                        <Spinner/>
                    :
                    ( data > 0) ?
                    data.map((member) => (
                    <Tr>
                        <Td>{member.name}</Td>
                        <Td>{member.image}</Td>
                        <Td>{member.description}</Td>
                        <Td>{member.facebookUrl}</Td>
                        <Td>{member.linkedinUrl}</Td>
                    </Tr> 
                    ))
                    : 
                    <Td>Sin miembros</Td>

                },
              
            </Tbody>
            </Table>
            </>
    )
}
 
export default MembersList;