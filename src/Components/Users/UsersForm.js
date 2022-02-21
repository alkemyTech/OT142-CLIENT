import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import '../FormStyles.css';

const SUPPORTED_FORMATS = ['image/jpg', 'image/png'];

const SignupSchema = Yup.object().shape({
    file: Yup.mixed().test('fileFormat', "Solo se permite formato .jpg o .png", value => SUPPORTED_FORMATS.includes(value?.type)),
    name: Yup.string().required('El campo Name no puede estar vacío').min(4, 'El campo name debe tener al menos 4 caracteres').max(10, 'El campo name puede tener máximo 10 caracteres'),
    email: Yup.string().email('Email inválido').required('El campo Email no puede estar vacío'),
    password: Yup.string().required('El campo Password no puede estar vacío').min(8, 'El campo password debe tener al menos 8 caracteres').max(10, 'El campo password puede tener máximo 15 caracteres'),
    userRole: Yup.string().oneOf(['Admin', 'User'], 'Role inválido').required('Debe seleccionar un role')
});

let userData = null
/*
//Testing
let userData = {
    file: 'imagen.jpg',
    name: 'joel',
    email: 'joel@example.com',
    password: 'password',
    roleId: 'user'
}*/
//userDat = userData
const UserForm = (userDat) => {
    const ref = useRef();
    
    const reset = () => {
        ref.current.value = "";
    };

    const [data, setData] = useState({
        file: '',
        name: '',
        email: '',
        password: '',
        userRole: ''
        })

        useEffect(() => {
            if (userData === null) {
             /*   Swal.fire('Usuario inexistente, completar el formulario para crear un nuevo usuario');*/
                } else {
                   /* Swal.fire('Usuario existente, completar el formulario para actualizar el usuario');*/
                   setData(userData);
                }
        }, [data])
        
    /*if (userData === null) {
        axios.post('/user', {data})
        .then((response) => {
            Swal.fire('Usuario inexistente, complete el formulario para crear un nuevo usuario');
        }).catch((error) => {

        })
    } else {
    
      /*axios.patch('/user/:id', { 
            userData
        }).then((response) => {
            Swal.fire('Usuario existente, completar el formulario para actualizar el usuario');
            setData(userData);
        }).catch((error) => {

        })
    }*/
    const initialValues = data;
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, {resetForm})=>{
                resetForm();
                reset();
            }}
        >
            {({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
            <Form className="form-container" onSubmit={handleSubmit}>
                <input 
                className="input-field"
                ref={ref}
                name='file'
                type='file'
                onChange={(event) => setFieldValue('file', event.target.files[0])}/>
                <ErrorMessage name='file' />
                <Field 
                    className="input-field" 
                    autoComplete="off"
                    type="text" 
                    name="name" 
                    value={userData === null ? values.name : initialValues.name}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    placeholder="Name">
                </Field>
                <ErrorMessage name='name' />
                <Field 
                    className="input-field" 
                    autoComplete="off"
                    type="text" 
                    name="email" 
                    value={userData === null ? values.email : initialValues.email} 
                    onChange={handleChange} 
                    placeholder="Email">
                </Field>
                <ErrorMessage name='email' />
                <Field 
                    className="input-field"
                    type="password"
                    autoComplete="off"
                    name="password" 
                    value={userData === null ? values.password : initialValues.password}
                    onChange={handleChange} 
                    placeholder="Password">
                </Field>
                <ErrorMessage name='password' />
                <Field className="input-field" component='select' name='userRole' onChange={handleChange('userRole')}>
                    <option value="" disabled >{initialValues.userRole === '' ? 'Role del usuario' : initialValues.userRole}</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </Field>
                <ErrorMessage name='userRole' />
                <button className="submit-btn" type="submit">Send</button>
            </Form>
            )}
        </Formik>
    );
}
 
export default UserForm;