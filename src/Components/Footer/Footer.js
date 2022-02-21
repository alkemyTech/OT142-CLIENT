import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { Input, InputLeftAddon, InputGroup } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Formik, Form, useFormik } from "formik";
import { Checkbox, Center } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

import * as Yup from "yup";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(
    localStorage.getItem("isSuscribed")
  );

  const [subscriberList, setSubscriberList] = useState([]);

  const SubscriptionSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor, introduzca un email válido.")
      .required("Requerido"),
  });

  const InitialValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
      localStorage.setItem("isSuscribed", true);
      setIsSubscribed(true);
      // Here we will introduce the Axios POST logic in the future
      setSubscriberList((prev) => [...prev, values.email]);
      console.log(values.email);
    },
    validationSchema: SubscriptionSchema,
  });

  const NewsletterForm = (
    <Center>
      <VStack
        as="form"
        h="auto"
        mx="auto"
        onSubmit={formik.handleSubmit}
        p="2em"
      >
        <Checkbox isRequired={true}>
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
                width="75%"
                align-self="flex-start"
                isRequired={false}
              />
            </InputGroup>
            <Button
              type="submit"
              variant="outline"
              colorScheme="teal"
              width="25%"
            >
              Acepto
            </Button>
          </Box>
          <SlideFade in={formik.errors.email && formik.touched.email}>
            <FormErrorMessage display="flex" mr="1em">
              {formik.errors.email}
            </FormErrorMessage>
          </SlideFade>
        </FormControl>
      </VStack>
    </Center>
  );

  return isSubscribed ? null : <Box p="2em">{NewsletterForm}</Box>;
};

export default Footer;
