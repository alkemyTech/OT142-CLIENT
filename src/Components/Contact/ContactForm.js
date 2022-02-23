import React from 'react'
import { Form, Formik, Field } from 'formik';
import { 
    Button, 
    Stack,
} from '@chakra-ui/react'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import * as Yup from 'yup';
import FieldControl from './FieldControl';
import { messageErrors } from '../../utils/messageErrors';

const {name, email, phone, message} = messageErrors;

let schemaContact = Yup.object().shape({
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
})

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
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {(props) => (
                <Form>
                    <Stack spacing={13} p={10}>
                        <Field name='firstName'>
                            {({field, form}) => (

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
                            {({field, form}) => (

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
                            {({field, form}) => (

                                <FieldControl 
                                    type='text'
                                    field={field} 
                                    form={form}
                                    idName='phone'
                                    title='Telefono'
                                    icon={AiOutlinePhone}
                                />

                            )}
                        </Field>

                        <Field name='message'>
                            {({field, form}) => (

                                <FieldControl 
                                    type='textarea'
                                    field={field} 
                                    form={form}
                                    idName='message'
                                    title='Mensaje'
                                />
                            )}
                        </Field>
                        <Button type="submit" colorScheme='blue'>Submit</Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm