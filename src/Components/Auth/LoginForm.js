import { Button, Flex, Box, FormControl, FormLabel, Input, Text, Image } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../Services/authService';
import { showAlertErr } from '../../Services/AlertServicie/AlertServicie';
import Spinner from '../Spinner';

const validationSchema = Yup.object({
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
    )
});

const LoginForm = () => {
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}

      validationSchema={validationSchema}

      onSubmit={async (values, action) => {
        try {
          const result = await login(values.email, values.password);
          if (!result.error) {
            console.log(result);
            const { token, user } = await result.data;
            sessionStorage.setItem('login-token', token);
            sessionStorage.setItem('login-role', user.role_id);
            history.push('/');
          } else {
            showAlertErr({ text: 'Por favor, verifica el usuario o la contraseña.' });
          }
        } catch (error) {
          console.log(error);
        }
        action.setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleBlur, handleChange, errors, isSubmitting }) => (
        <Flex p='4' justifyContent='center' alignItems='center'>
          <Flex w='350px' shadow='md' borderRadius='md' p='4' flexDirection='column' justifyContent='center' alignItems='center' bg='gray.200'>
            <Image src='/images/LOGO-SOMOS-MAS.png' boxSize='150px' />
            <Text fontSize='lg'>Iniciar sesión</Text>
            <FormControl mt='4' isRequired isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} fontSize='sm' bg='white' borderColor='gray.300' id='email' type='email' placeholder='somosmas@example.com' />
              <Box mt='2' color='red.400'>{errors && <Text fontSize='sm'>{errors.email}</Text>}</Box>
            </FormControl>
            <FormControl mt='4' isRequired isInvalid={errors.password}>
              <FormLabel>Contraseña</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} fontSize='sm' bg='white' borderColor='gray.300' id='password' type='password' placeholder='Ingrese su contraseña' />
              <Box mt='2' color='red.400'>{errors && <Text fontSize='sm'>{errors.password}</Text>}</Box>
            </FormControl>
            {isSubmitting
              ? <Spinner isLoading={isSubmitting} size='40px' color='blue'/>
              : <Button onClick={handleSubmit} background='gray.300' mt='4' type='submit'>Ingresar</Button>}
            {/* <Text fontSize='sm' mt='3'>¿No tienes una cuenta?<Link color='blue.400' as={ReachLink} to='/registro'> Regístrate</Link></Text> */}
          </Flex>
        </Flex>
      )}
    </Formik>
  );
};
export default LoginForm;
