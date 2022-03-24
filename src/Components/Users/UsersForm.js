import { Flex, FormControl, FormLabel, Input, Select, Image, Text, Button, FormErrorMessage } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { post, put } from '../../Services/publicApiService';
import { showAlertOkey } from '../../Services/AlertServicie/AlertServicie';

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

const SignupSchema = Yup.object().shape({
  // file: Yup.mixed().test('fileFormat', 'Solo se permite formato .jpg o .png', (value) =>
  //   SUPPORTED_FORMATS.includes(value?.type)
  // ),
  name: Yup.string()
    .required('El campo name no puede estar vacío')
    .min(4, 'El campo name debe tener al menos 4 caracteres')
    .max(10, 'El campo name puede tener máximo 10 caracteres'),
  email: Yup.string().email('Email inválido').required('El campo email no puede estar vacío'),
  password: Yup.string()
    .required('El campo Password no puede estar vacío')
    .min(8, 'El campo password debe tener al menos 8 caracteres')
    .max(15, 'El campo password puede tener máximo 15 caracteres')
});

const UserForm = () => {
  const history = useHistory();
  const userdata = history.location.state;

  return (
    <Formik
      enableReinitialize={true}
      initialValues={
        { name: userdata?.name || '', email: userdata?.email || '', password: userdata?.passowrd || '', userRole: userdata?.role_id || '', file: userdata?.profile_image || '' }
      }
      validationSchema={SignupSchema}

      onSubmit={async (values, action) => {
        try {
          if (!userdata) {
            const resultPost = await post(process.env.REACT_APP_USERS, values);
            if (resultPost?.data.success) {
              showAlertOkey({ text: 'Usuario creado con exitosamente.' });
              history.push('users');
            }
          } else {
            const resultPut = await put(process.env.REACT_APP_USERS, userdata.id, values);
            if (resultPut?.data.success) {
              showAlertOkey({ text: 'Usuario editado exitosamente.' });
              history.push('users');
            }
          }
        } catch (error) {
          console.log(error);
        }
        action.setSubmitting(false);
        action.resetForm();
      }}
    >
      {({ handleSubmit, handleBlur, handleChange, setFieldValue, values, errors }) => (
        <Flex p='4' w='full' justifyContent='center' alignItems='center'>
          <Flex borderRadius='md' p='4' flexDirection='column' bg='gray.200' justifyContent='center' alignItems='center'>

            <Image src='/images/LOGO-SOMOS-MAS.png' boxSize='100px' />
            <Text fontSize='lg'>Creacion/edicion de usuarios</Text>

            <FormControl mt='4' isInvalid={errors.name}>
              <FormLabel>Nombre</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} value={values.name} name='name' type='text' bg='white' placeholder='Ingrese su nombre' />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl mt='4' isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} value={values.email} name='email' type='email' bg='white' placeholder='Ingrese su email' />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl mt='4' isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' type='password' bg='white' placeholder='Ingrese su contraseña' />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <FormControl mt='4' isInvalid={errors.userRole}>
              <FormLabel>Role</FormLabel>
              <Select bg='white'>
                <option>Admin</option>
              </Select>
              <FormErrorMessage>{errors.userRole}</FormErrorMessage>
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Foto de perfil</FormLabel>
              <Input
                name='file'
                type='file'
                onChange={(e) => {
                  handleChange(e);
                  const file = e.currentTarget.files[0];
                  setFieldValue('file', URL.createObjectURL(file));
                }}
                onBlur={handleBlur}
              />
            </FormControl>

            <Button onClick={handleSubmit} mt='4' type='submit'>Confirmar</Button>
          </Flex>
        </Flex>
      )}

    </Formik>
  );
};

export default UserForm;
