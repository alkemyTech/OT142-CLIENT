import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import '../FormStyles.css';

const SignupSchema = Yup.object().shape({
    name: Yup.string().required('El campo Name no puede estar vacío').min(4, 'El campo name debe tener al menos 4 caracteres').max(10, 'El campo name puede tener máximo 10 caracteres'),
    email: Yup.string().email('Email inválido').required('El campo Email no puede estar vacío'),
    password:Yup.string().required('El campo Password no puede estar vacío').min(8, 'El campo password debe tener al menos 8 caracteres').max(10, 'El campo password puede tener máximo 15 caracteres')
  });

 
  let userData = null
   /*
   //Testing
   let userData = {
      name: 'joel',
      email: 'joel@example.com',
      password: 'password',
      roleId: 'user'
  }*/
//userDat = userData
const UserForm = (userDat) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        roleId: ''
        })

        useEffect(() => {
            if (userData === null) {
                Swal.fire('Usuario inexistente, completar el formulario para crear un nuevo usuario');
                } else {
                   Swal.fire('Usuario existente, completar el formulario para actualizar el usuario');
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
    console.log('initialValues', initialValues)
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm })=>{
                resetForm();
            }}
        >
            {({ values, handleSubmit, handleChange, handleBlur }) => (
            <Form className="form-container" onSubmit={handleSubmit}>
                <input 
                    className="input-field" 
                    type="file">
                </input>
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
                <select className="input-field" value={userData === null ? values.roleId : initialValues.roleId} /*data.roleId || ''}*/ onChange={e => setData({...data.roleId, roleId: e.target.value})}>
                    <option value="" disabled >{userData === null ? null : initialValues.roleId}Select the role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select>
                <button className="submit-btn" type="submit">Send</button>
            </Form>
            )}
        </Formik>
    );
}
 
export default UserForm;