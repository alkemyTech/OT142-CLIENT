import React, { useState, useEffect } from 'react';
import '../FormStyles.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TermsAndConditions from '../Modal/TermsAndCond';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Link,
  Text,
  Image
} from '@chakra-ui/react';
import MapsWrapper from '../Maps/MapsWrapper';
import { register } from '../../Services/authService';
import { useHistory, Link as ReachLink } from 'react-router-dom';
import Spinner from '../Spinner';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Por favor ingrese un nombre'),
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
  const [registerValue, setRegisterValue] = useState();

  const [latLng, setLatLng] = useState({
    latitude: 0,
    longitude: 0,
    adress: ''
  });

  const history = useHistory();

  const onCheckChange = (string) => {
    setRegisterValue(string);
  };

  useEffect(() => {
    // Esto es para que no pueda entrar al registro si ya esta autenticado
    sessionStorage.getItem('login-token') && history.push('/');
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}

      onSubmit={async (values, action) => {
        try {
          const result = await register(values.name, values.email, values.password);
          if (result.success) {
            const { token, user } = await result.data;
            sessionStorage.setItem('login-token', token);
            sessionStorage.setItem('login-role', user.role_id);
            console.log(latLng);
            history.push('/');
          }
        } catch (error) {
          console.log(error);
        }
        action.setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, errors, isSubmitting }) => (
        <Flex justifyContent='center' alignItems='center'>
          <Flex p='3' borderRadius='md' maxW='600px' bg='gray.200' flexDirection='column' justifyContent='center' alignItems='center'>
            <Image src='/images/LOGO-SOMOS-MAS.png' boxSize='130px' />
            <Text fontSize='lg'>Registro</Text>
            <Flex flexDirection={{ base: 'column', md: 'row' }} mt='4' justifyContent='center' alignItems='center'>
              <Flex p='4' flexDirection='column' justifyContent='center' alignItems='center'>
                <FormControl mt='2' isInvalid={errors.name}>
                  <FormLabel>Nombre completo</FormLabel>
                  <Input value={values.name} name='name' onChange={handleChange} onBlur={handleBlur} bg='white' type='text' placeholder='Ingrese su nombre' />
                  {errors && <FormErrorMessage maxW='150px'>{errors.name}</FormErrorMessage>}
                </FormControl>
                <FormControl mt='2' isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} bg='white' type='email' placeholder='Ingrese su email' />
                  {errors && <FormErrorMessage maxW='150px'>{errors.email}</FormErrorMessage>}
                </FormControl>
              </Flex>
              <Flex p='4' ms='2' flexDirection='column' justifyContent='center' alignItems='center'>
                <FormControl mt='2' isInvalid={errors.password}>
                  <FormLabel>Contraseña</FormLabel>
                  <Input value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} bg='white' type='password' placeholder='Ingrese su contraseña' />
                  {errors && <FormErrorMessage maxW='150px'>{errors.password}</FormErrorMessage>}
                </FormControl>
                <FormControl mt='2' isInvalid={errors.passwordRepeat}>
                  <FormLabel>Repetir contraseña</FormLabel>
                  <Input value={values.passwordRepeat} name='passwordRepeat' onChange={handleChange} onBlur={handleBlur} bg='white' type='password' placeholder='Repita su contraseña' />
                  {errors && <FormErrorMessage maxW='150px'>{errors.passwordRepeat}</FormErrorMessage>}
                </FormControl>
              </Flex>
            </Flex>
            <FormControl mt='4'>
              <MapsWrapper setLatLng={setLatLng} />
            </FormControl>
            <Flex flexDirection='column' mt='2'>
              <TermsAndConditions handleChange={onCheckChange} />
            </Flex>
            {registerValue === 'accept' &&
              isSubmitting
              ? <Spinner isLoading={isSubmitting} size='40px' color='blue'/>
              : <Button onClick={handleSubmit} background='gray.300' mt='4' type='submit'>Registrarme</Button>}
            <Text fontSize='sm' mt='4'>¿Ya tienes una cuenta?<Link color='blue.400' as={ReachLink} to='/login'> Inicia sesión</Link></Text>
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};
export default RegisterForm;

// <Flex
//   minHeight="100%"
//   width="100%"
//   alignItems="center"
//   justifyContent="center"
//   flexDirection="column"
// >
//   <Box
//     width={{ base: '90%', md: '400px' }}
//     bg="secondary.card"
//     rounded="lg"
//     p={5}
//   >
//     <form className="form-container" onSubmit={formik.handleSubmit}>
//       <Stack p='4' w='450px' borderRadius='md' bg='gray.200' spacing={4} marginBottom="1rem">
//         <Flex justifyContent='center' alignItems='center'>
//           <Image textAlign='center' src='/images/LOGO-SOMOS-MAS.png' boxSize='150px'/>
//         </Flex>
//         <Text fontSize='lg' textAlign='center'>Registro</Text>
//         <Flex>

//         </Flex>
//         <FormControl isInvalid={formik.errors.name && formik.touched.name}>
//           <FormLabel htmlFor="name">Nombre</FormLabel>

//           <Input
//             bg='white'
//             variant="outline"
//             type="text"
//             name="name"
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Ingrese su nombre"
//           ></Input>

//           <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
//         </FormControl>
//         <FormControl
//           isInvalid={formik.errors.lastName && formik.touched.lastName}
//         >
//           <Stack justifyContent="space-between" isInline>
//             <FormLabel htmlFor="lastName">Apellido</FormLabel>
//           </Stack>

//           <Input
//             bg='white'
//             variant="outline"
//             type="text"
//             name="lastName"
//             value={formik.values.lastName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Ingrese su apellido"
//           ></Input>

//           <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
//         </FormControl>
//         <FormControl
//           isInvalid={formik.errors.email && formik.touched.email}
//         >
//           <Stack justifyContent="space-between" isInline>
//             <FormLabel htmlFor="email">Email</FormLabel>
//           </Stack>

//           <Input
//             bg='white'
//             variant="outline"
//             type="email"
//             name="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="name@ejemplo.com"
//           ></Input>

//           <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//         </FormControl>
//         <FormControl>
//           <Stack justifyContent="space-between" isInline>
//             <FormLabel htmlFor="address">Dirección</FormLabel>
//           </Stack>

//           <MapsWrapper setLatLng={setLatLng} />
//         </FormControl>

//         <FormControl
//           isInvalid={formik.errors.password && formik.touched.password}
//         >
//           <Stack justifyContent="space-between" isInline>
//             <FormLabel htmlFor="password">Contraseña</FormLabel>
//           </Stack>

//           <Input
//             bg='white'
//             variant="outline"
//             type="password"
//             name="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Ingrese su contraseña"
//           ></Input>

//           <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
//         </FormControl>
//         <FormControl
//           isInvalid={
//             formik.errors.passwordRepeat && formik.touched.passwordRepeat
//           }
//         >
//           <Stack justifyContent="space-between" isInline>
//             <FormLabel htmlFor="passwordRepeated">
//               Confirma tu contraseña
//             </FormLabel>
//           </Stack>

//           <Input
//             bg='white'
//             variant="outline"
//             type="password"
//             name="passwordRepeat"
//             value={formik.values.passwordRepeat}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             placeholder="Confirme su contraseña"
//           ></Input>

//           <FormErrorMessage>
//             {formik.errors.passwordRepeat}
//           </FormErrorMessage>
//         </FormControl>
//       </Stack>

//       <Stack marginBottom="1rem">
//         <TermsAndConditions handleChange={handleChange} />
//         {registerValue === 'accept'
//           ? (<Button
//             type='submit'
//             size='md'
//             variant='solid'
//             colorScheme='teal'
//           >
//             Registrar
//           </Button>
//             )
//           : (
//           <Button size="md" variant="ghost" colorScheme="teal">
//             Registrar
//           </Button>
//             ) }
//       </Stack>
//     </form>
//   </Box>
// </Flex>
