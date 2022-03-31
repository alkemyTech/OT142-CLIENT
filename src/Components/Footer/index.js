/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl } from '@chakra-ui/form-control';
import { Input, InputLeftAddon, InputGroup } from '@chakra-ui/input';
import { VStack } from '@chakra-ui/layout';
import { useFormik } from 'formik';
import {
  Checkbox, Center, Box, SlideFade,
  AlertTitle,
  Alert,
  AlertIcon
} from '@chakra-ui/react';

import * as Yup from 'yup';
import { AlertOkeyInfo } from '../../Services/AlertServicie/AlertServicie';

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem('isSuscribed')
  );
  const [logined, setLogined] = useState(false);
  const [subscriberList, setSubscriberList] = useState([]);

  useEffect(() => {
    const quepe = sessionStorage.getItem('login-token');
    quepe && setLogined(true);
    // && setIsLoggedIn(true);
  }, []);

  const SubscriptionSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor, introduzca un email válido.')
      .required('Por favor, introduzca un email'),
    acceptSuscribe: Yup.bool().oneOf(
      [true],
      'Debes tildar el casillero para recibir novedades.'
    )
  });

  const InitialValues = {
    email: ''
  };

  const formik = useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
      localStorage.setItem('isSuscribed', true);
      setIsSubscribed(true);
      AlertOkeyInfo({ title: 'Muchas gracias', text: 'Te has subscripto a Newsletter' });
      // Here we will introduce the Axios POST logic in the future
      setSubscriberList((prev) => [...prev, values.email]);
      console.log(values.email);
    },
    validationSchema: SubscriptionSchema
  });

  const NewsletterForm = (
    <Center>
      {(logined) &&
      <VStack
        as="form"
        h="auto"
        mx="auto"
        onSubmit={formik.handleSubmit}
      >
        <Checkbox isRequired={true} name="acceptSubscribe">
          Deseo suscribirme al Newsletter para recibir actualizaciones
        </Checkbox>
        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
          <Box display="flex" width="100%" justifyContent="space-around">
            <InputGroup>
              <InputLeftAddon children="Email" />
              <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="foo@gmail.com"
                p="1em"
                width="85%"
                align-self="flex-start"
                isRequired={false}
              />
            </InputGroup>
            <Button ml="1em" type="submit" colorScheme="blue" width="25%">
              Acepto
            </Button>
          </Box>
          <Box mt="1em">
            <SlideFade in={formik.errors.email && formik.touched.email}>
              {formik.errors.email && formik.touched.email
                ? (
                <Alert borderRadius="0.5em" status="error" tm="1em">
                  <AlertIcon />
                  <AlertTitle>{formik.errors.email}</AlertTitle>
                </Alert>
                  )
                : (
                <></>
                  )}
            </SlideFade>
          </Box>
        </FormControl>
      </VStack>
      }
    </Center>
  );

  return isSubscribed ? null : <Box p="1em">{NewsletterForm}</Box>;
};

export default Footer;
