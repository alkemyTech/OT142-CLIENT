import React from 'react';
import { Form, Formik, Field } from 'formik';
import {
  Box,
  Button,
  Stack
} from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import * as Yup from 'yup';
import FieldControl from './FieldControl';
import { messageErrors } from '../../utils/messageErrors';
import { createContact } from '../../Services/contactService';
import { showAlertOkey } from '../../Services/AlertServicie/AlertServicie';

const { name, email, phone, message } = messageErrors;

const schemaContact = Yup.object().shape({
  firstName: Yup
    .string()
    .required(name.messageRequired)
    .matches(/^[aA-zZ\s]+$/, name.typeError),
  email:
        Yup.string()
          .email(email.formatInvalid)
          .required(email.messageRequired),
  phone: Yup
    .number()
    .typeError(phone.typeError)
    .test('len', phone.minCharacters, val => val && val.toString().length >= 8)
    .required(phone.messageRequired),
  message: Yup
    .string()
    .required(message.messageRequired)
});

const ContactForm = () => {
  return (
        <Formik
            initialValues={{
              firstName: '',
              email: '',
              phone: '',
              message: ''
            }}
            validationSchema={schemaContact}
            onSubmit={async (values, { resetForm }) => {
              try {
                await createContact(values);
                resetForm();
                showAlertOkey({ title: 'Datos de contacto enviados con éxito', text: 'En brevedad será contactado por uno de los medios suministrados' });
              } catch (error) {
                console.log(error);
              }
            }}
        >
            {({ handleSubmit }) => (
                <Box w={'100%'} mb={5}>
                    <Form>
                        <Stack spacing={13}>
                            <Field name='firstName'>
                                {({ field, form }) => (

                                    <FieldControl
                                        type='text'
                                        field={field}
                                        form={form}
                                        idName='firstName'
                                        title='Nombre'
                                        icon={AiOutlineUser}
                                    />

                                )}
                            </Field>

                            <Field name='email'>
                                {({ field, form }) => (

                                    <FieldControl
                                        type='text'
                                        field={field}
                                        form={form}
                                        idName='email'
                                        title='Email'
                                        icon={AiOutlineMail}
                                    />
                                )}
                            </Field>

                            <Field name='phone'>
                                {({ field, form }) => (

                                    <FieldControl
                                        type='text'
                                        field={field}
                                        form={form}
                                        idName='phone'
                                        title='Teléfono'
                                        icon={AiOutlinePhone}
                                    />

                                )}
                            </Field>

                            <Field name='message'>
                                {({ field, form }) => (

                                    <FieldControl
                                        type='textarea'
                                        field={field}
                                        form={form}
                                        idName='message'
                                        title='Mensaje'
                                    />
                                )}
                            </Field>
                            <Button onClick={handleSubmit} colorScheme='blue' width={'120px'}>Enviar</Button>
                        </Stack>
                    </Form>
                </Box>
            )}
        </Formik>
  );
};

export default ContactForm;
