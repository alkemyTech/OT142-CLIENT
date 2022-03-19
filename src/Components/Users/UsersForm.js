import React, { useState, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@chakra-ui/react';
import * as Yup from 'yup';
import '../FormStyles.css';
import './UsersForm.css';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

const SignupSchema = Yup.object().shape({
  file: Yup.mixed().test('fileFormat', 'Solo se permite formato .jpg o .png', (value) =>
    SUPPORTED_FORMATS.includes(value?.type)
  ),
  name: Yup.string()
    .required('El campo Name no puede estar vacío')
    .min(4, 'El campo name debe tener al menos 4 caracteres')
    .max(10, 'El campo name puede tener máximo 10 caracteres'),
  email: Yup.string().email('Email inválido').required('El campo Email no puede estar vacío'),
  password: Yup.string()
    .required('El campo Password no puede estar vacío')
    .min(8, 'El campo password debe tener al menos 8 caracteres')
    .max(10, 'El campo password puede tener máximo 15 caracteres'),
  userRole: Yup.string()
    .oneOf(['Admin', 'User'], 'Role inválido')
    .required('Debe seleccionar un role')
});

/*
//Testing
let userData = {
    file: 'imagen.jpg',
    name: 'joel',
    email: 'joel@example.com',
    password: 'password',
    roleId: 'user'
} */
const UserForm = (userData) => {
  const ref = useRef();

  const reset = () => {
    ref.current.value = '';
  };

  const [data, setData] = useState({
    file: '',
    name: '',
    email: '',
    password: '',
    userRole: ''
  });

  useEffect(() => {
    if (userData) {
      /*   Swal.fire('Usuario inexistente, completar el formulario para crear un nuevo usuario'); */
    } else {
      /* Swal.fire('Usuario existente, completar el formulario para actualizar el usuario'); */
      setData(userData);
    }
  }, [data]);

  /* if (userData === null) {
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
    } */
  const initialValues = data;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        reset();
      }}>
      {({ values, handleSubmit, handleChange, handleBlur, setFieldValue }) => (
        <Form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input-field"
            ref={ref}
            name="file"
            type="file"
            onChange={(event) => setFieldValue('file', event.target.files[0])}
          />

          <ErrorMessage name="file" render={(msg) => <div className="error">{msg}</div>} />

          <Field
            className="input-field"
            autoComplete="off"
            type="text"
            name="name"
            value={userData ? values.name : initialValues.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Nombre"></Field>
          <ErrorMessage
            name="name"
            component="div"
            render={(msg) => <div className="error">{msg}</div>}
          />

          <Field
            className="input-field"
            autoComplete="off"
            type="text"
            name="email"
            value={userData ? values.email : initialValues.email}
            onChange={handleChange}
            placeholder="Correo electrónico"></Field>
          <ErrorMessage name="email" render={(msg) => <div className="error">{msg}</div>} />

          <Field
            className="input-field"
            type="password"
            autoComplete="off"
            name="password"
            value={userData ? values.password : initialValues.password}
            onChange={handleChange}
            placeholder="Contraseña"></Field>
          <ErrorMessage name="password" render={(msg) => <div className="error">{msg}</div>} />

          <Field
            className="input-field"
            component="select"
            name="userRole"
            onChange={handleChange('userRole')}>
            <option value="" disabled>
              {initialValues.userRole === '' ? 'Role del usuario' : initialValues.userRole}
            </option>
            <option value="Admin">Administrador</option>
            <option value="User">Usuario</option>
          </Field>
          <ErrorMessage name="userRole" render={(msg) => <div className="error">{msg}</div>} />
          <Button className="submit-btn" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
