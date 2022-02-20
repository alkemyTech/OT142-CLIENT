import React, { useState } from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { Formik, Field, Form, useFormik } from "formik";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import * as Yup from "yup";

const Footer = () => {
  const [isSuscribed, setIsSuscribed] = useState(
    localStorage.getItem("isSuscribed")
  );

  const SubscriptionSchema = Yup.object().shape({
    email: Yup.string()
      .email("Por favor, introduzca un email válido")
      .required("Requerido"),
  });

  const InitialValues = {
    email: "",
    acceptSubscription: false,
  };

  const formik = useFormik({
    initialValues: InitialValues,
    onSubmit: (values) => {
      localStorage.setItem("isSuscribed", true);
      setIsSuscribed = true;
      console.log(values);
    },
    validationSchema: SubscriptionSchema,
  });

  const NewsletterForm = (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      justifyContent={"center"}
      onSubmit={formik.handleSubmit}
    >
      <Checkbox isRequired={true}>
        Deseo suscribirme al Newsletter para recibir actualizaciones
      </Checkbox>
      <Box display="flex" space-between="1em">
        <FormControl>
          <Input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Ingrese su email"
          />{" "}
        </FormControl>

        <Button type="submit" variant="outline" colorScheme="teal">
          Acepto
        </Button>
      </Box>
    </VStack>
  );

  return isSuscribed ? <></> : NewsletterForm;
};

export default Footer;
