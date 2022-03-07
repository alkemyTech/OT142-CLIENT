import React from 'react';
import ImagenAgradecimiento from './ImagenAgradecimiento.png';
import {
    Center,
    Text
} from '@chakra-ui/react';

const Thanks = () => {
    return (
        <>
            <Center marginTop={20}>
                <img src={ImagenAgradecimiento} alt='Imagen Agradecimiento' />
            </Center>
            <Center marginBottom={5}>
                <Text fontSize='3xl'>¡Muchas Gracias por su Aporte!</Text>
            </Center>
        </>
    )
}

export default Thanks;