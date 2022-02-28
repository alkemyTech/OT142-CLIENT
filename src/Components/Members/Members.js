import React, { useState } from 'react'
import MembersCreate from './MembersCreate';
import MembersEdit from './MembersEdit';
import {
    Button,
    Center
} from "@chakra-ui/react";

const Members = () => {
    const [showForm, setShowForm] = useState(true);

    const handleClickCreate = () => {
        setShowForm(true);
    };

    const handleClickEdit = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <Center>
                <Button onClick={handleClickCreate} colorScheme='yellow' margin={10}>
                    Crear Miembro
                </Button>
                <Button onClick={handleClickEdit} colorScheme='yellow' margin={5}>
                    Editar Miembro
                </Button>
            </Center>
            {
                showForm ? <MembersCreate /> : <MembersEdit />
            }
        </div>
    )
}

export default Members;