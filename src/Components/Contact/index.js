import React from 'react'
import { Heading } from '@chakra-ui/react'
import ContactForm from './ContactForm'


const index = () => {
  return (
    <>

        <Heading p={10}>
            Formulario de contacto
        </Heading>

        <ContactForm />

    </>
  )
}

export default index