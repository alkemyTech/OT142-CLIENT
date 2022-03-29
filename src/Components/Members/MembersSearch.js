import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react';

const MembersSearch = (input) => {
  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (input.length < 2) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [input]);

  return (
    <FormControl>
      <FormLabel htmlFor='memberSearch'>Buscar Miembros</FormLabel>
      <Input id='membersSearch' type='text' />
      <FormHelperText>Ingrese el miembro que desea buscar</FormHelperText>
    </FormControl>
  );
};

export default MembersSearch;
