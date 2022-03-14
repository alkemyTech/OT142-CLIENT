import React from 'react';
import {
  showAlertOkey,
  showAlertInfo,
  showAlertErr
} from './AlertServicie';
import { Button, Box } from '@chakra-ui/react';

export const AlertRoute = () => {
  return (
   <>
    { showAlertOkey()}
   </>
  );
};
