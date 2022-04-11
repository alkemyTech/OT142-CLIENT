import React from 'react';
import { Button } from '@chakra-ui/react';
import { FcDonate } from 'react-icons/fc';

const DonateButton = () => {
  return (
    <>
    <Button colorScheme='teal'color={'gray.650'} fontSize="sm" variant='ghost'>
    Donar
    <FcDonate/>
  </Button></>
  );
};

export default DonateButton;
