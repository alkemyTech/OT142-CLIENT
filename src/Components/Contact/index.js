import React from 'react';
import { Heading } from '@chakra-ui/react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>

        <Heading p={10}>
            Formulario de contacto
        </Heading>

        <ContactForm />

    </>
  );
};

export default Contact;
