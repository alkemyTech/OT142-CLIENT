import React from 'react';
import Navbar from '../Components/Navbar/Backoffice/Navbar';
import { BackofficeSwitch } from './BackofficeSwitch';

export const Layout = () => {
  console.log('hola');
  return (
    <>
        <Navbar/>
        <BackofficeSwitch/>
    </>
  );
};
