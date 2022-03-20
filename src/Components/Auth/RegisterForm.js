import React, { useState } from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TermsAndConditions from '../Modal/TermsAndCond';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Flex,
  Heading,
  Stack
} from '@chakra-ui/react';
import MapsWrapper from '../Maps/MapsWrapper';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  passwordRepeat: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Por favor ingrese un nombre'),
  lastName: Yup.string().required('Por favor ingrese un apellido'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('Por favor ingrese un email'),
  password: Yup.string()
    .required('Por favor ingrese una contraseña')
    .trim()
    .min(6, 'Debe contener al menos 6 carácteres')
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      'Es necesario un carácter especial o número'
    ),
  passwordRepeat: Yup.string()
    .required('Por favor repita su contraseña')
    .oneOf([Yup.ref('password'), null], 'La contraseña debe coincidir')
});

const RegisterForm = () => {
  const [latLng, setLatLng] = useState({
    latitude: 0,
    longitude: 0,
    address: ''
  });

  const onSubmit = (values) => {
    const user = { ...values, ...latLng };
    console.log(user);
    localStorage.setItem('token', 'tokenValueExample');
  };

  const [registerValue, setRegisterValue] = useState();

  const handleChange = (string) => {
    setRegisterValue(string);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <Flex
      bg="secondary.background"
      minHeight="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        width={{ base: '90%', md: '400px' }}
        bg="secondary.card"
        rounded="lg"
        p={5}
      >
        <Heading marginBottom="1.5rem">Registro</Heading>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <Stack spacing={4} marginBottom="1rem">
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <FormLabel htmlFor="name">Nombre</FormLabel>

              <Input
                variant="outline"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su nombre"
              ></Input>

              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="lastName">Apellido</FormLabel>
              </Stack>

              <Input
                variant="outline"
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su apellido"
              ></Input>

              <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="email">Email</FormLabel>
              </Stack>

              <Input
                variant="outline"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="name@ejemplo.com"
              ></Input>

              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="address">Dirección</FormLabel>
              </Stack>

              <MapsWrapper setLatLng={setLatLng} />
            </FormControl>

            <FormControl
              isInvalid={formik.errors.password && formik.touched.password}
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
              </Stack>

              <Input
                variant="outline"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese su contraseña"
              ></Input>

              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.passwordRepeat && formik.touched.passwordRepeat
              }
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="passwordRepeated">
                  Confirma tu contraseña
                </FormLabel>
              </Stack>

              <Input
                variant="outline"
                type="password"
                name="passwordRepeat"
                value={formik.values.passwordRepeat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirme su contraseña"
              ></Input>

              <FormErrorMessage>
                {formik.errors.passwordRepeat}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack marginBottom="1rem">
            <TermsAndConditions handleChange={handleChange} />
            {registerValue === 'accept'
              ? (<Button
                type='submit'
                size='md'
                variant='solid'
                colorScheme='teal'
              >
                Registrar
              </Button>
                )
              : (
              <Button size="md" variant="ghost" colorScheme="teal">
                Registrar
              </Button>
                ) }
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
