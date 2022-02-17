import React from 'react'
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';

// COMO: Usuario
// QUIERO: Visualizar un Formulario de Contacto
// PARA: Enviar un mensaje a la ONG

// Criterios de aceptación: Este componente renderizará el Formulario de Contacto que posteriormente realizará un envío de email. Deberá contener los campos name, email, phone y message, y validar los mismos al hacer submit.

// Validaciones:

// listo - Todos los campos son obligatorios
// listo - Verificar el formato correcto del email
// listo - Phone deberá ser un número, y contener una longitud mínima de 8 caracteres

let schemaContact = Yup.object().shape({
    firstName: Yup.string().required('Name required'),
    email: Yup.string().email('Invalid email address').required('Email required'),
    phone: Yup.number().test('len', 'Must be exactly 8 characters', val => val && val.toString().length >= 8).required('Phone required'),
    message: Yup.string().required('Message required')
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
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field id="firstName" type="text" name="firstName" placeholder="Nombre" />
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <Field id="phone" name="phone" type="tel" placeholder="Phone Number" />
                        {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <Field 
                            id="message"
                            name="message"
                            placeholder="Message"
                            as='textarea'
                        />
                        {errors.message && touched.message ? (
                            <div>{errors.message}</div>
                        ) : null}
                    </div>


                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactForm