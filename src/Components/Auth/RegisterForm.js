import "../FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Flex,
  Heading,
  Stack,
  InputGroup
} from "@chakra-ui/react";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
};

const onSubmit = (values) => {
  const user = { ...values };

  localStorage.setItem("token", "tokenValueExample");
};

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  lastName: Yup.string().required("Please enter your lastname"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(6, "Must be at least 6 characters")
    .matches(
      /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
      "Need one special character or number"
    ),
  passwordRepeat: Yup.string()
    .required("Please repeat your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
        width={{ base: "90%", md: "400px" }}
        bg="secondary.card"
        rounded="lg"
        p={5}
      >
        <Heading marginBottom="1.5rem">Registro</Heading>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <Stack spacing={4} marginBottom="1rem">
            <FormControl
              
              isInvalid={formik.errors.name && formik.touched.name}
            >
              <FormLabel htmlFor="name">Nombre</FormLabel>
              
                <Input
                  focusBorderColor="#D69E2E"
                  variant="outline"
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Ingresa tu nombre"
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
                focusBorderColor="#D69E2E"
                variant="outline"
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingresa tu apellido"
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
                focusBorderColor="#D69E2E"
                variant="outline"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="name@example.com"
              ></Input>

              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl
              
              isInvalid={formik.errors.password && formik.touched.password}
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
              </Stack>
              
              <Input
                focusBorderColor="#D69E2E"
                variant="outline"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingresa tu contraseña"
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
                focusBorderColor="#D69E2E"
                variant="outline"
                type="password"
                name="passwordRepeat"
                value={formik.values.passwordRepeat}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirma tu contraseña"
              ></Input>

              <FormErrorMessage>
                {formik.errors.passwordRepeat}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack marginBottom="1rem">
            <Button type="submit" size="md" variant="solid" colorScheme="teal">
              Registrar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default RegisterForm;
