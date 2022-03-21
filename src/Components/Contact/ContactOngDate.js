import { Stack } from '@chakra-ui/react';
import React from 'react';
import ContactDate from './ContactDate';
import ContactForm from './ContactForm';
import TitleContact from './TitleContact';

export default function ContactOngDate () {
  return (
    <>
      <TitleContact />
      <Stack direction={['column', 'column', 'row']} w={'100%'} alignItems={'center'}>
        <ContactDate />
        <ContactForm />
      </Stack>
    </>
  );
}
