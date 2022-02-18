import "../FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  Flex,
} from "@chakra-ui/react";

const initialValues = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const onSubmit = (values) => {
  const user = { ...values };

  localStorage.setItem("token", "tokenValueExample");
};

const validationSchema = Yup.object({
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
    .required("Please enter your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });


  return (
    <Container>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.email}>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            isInvalid={formik.errors.email}
            variant="outline"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
          ></Input>
          {formik.touched.email && formik.errors.email ? (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={formik.errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            variant="outline"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your password"
          ></Input>
          {formik.touched.password && formik.errors.password ? (
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={formik.errors.passwordRepeat}>
          <FormLabel htmlFor="passwordRepeated">Repeat your password</FormLabel>
          <Input
            variant="outline"
            type="password"
            name="passwordRepeat"
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Repeat your password"
          ></Input>
          {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
            <FormErrorMessage>{formik.errors.passwordRepeat}</FormErrorMessage>
          ) : null}
        </FormControl>
        <Flex>
          <Button colorScheme="blue" size="md" type="submit">
            Register
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default RegisterForm;
