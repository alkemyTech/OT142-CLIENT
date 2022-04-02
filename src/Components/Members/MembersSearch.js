import React, { useState } from 'react';
import {
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react';

const MembersSearch = ({ handleChange, isInvalid }) => {
  // const [isInvalid, setIsInvalid] = useState(true);

  return (
    <Center>
      <Box p={6}>
        <FormControl isInvalid={isInvalid}>
          <FormLabel htmlFor='memberSearch'>Buscar Miembros</FormLabel>
          <Input id='membersSearch' type='text' onChange={handleChange} />
          {!isInvalid
            ? (
            <FormHelperText>Ingrese el miembro que desea buscar</FormHelperText>
              )
            : (
            <FormErrorMessage>
              {' '}
              Debe ingresar como mínimo 2 letras.
            </FormErrorMessage>
              )}
        </FormControl>
      </Box>
    </Center>
  );
};

export default MembersSearch;
