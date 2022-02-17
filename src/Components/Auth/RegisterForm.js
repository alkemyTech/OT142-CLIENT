import React, { useState } from "react";
import "../FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
  passwordRepeat: "",
};

const onSubmit = (values) => {
    const user = {...values};

    localStorage.setItem("token", "tokenValueExample");
};



const validationSchema = Yup.object({

  email: Yup.string().email("Invalid email format").required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .trim()
    .min(6, "Must be at least 6 characters")
    .matches(
        /^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,
       'Need one special character or number',
    ),
  passwordRepeat: Yup.string()
    .required("Please enter your password")
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterForm = () => {
  

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });



  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter email"
      ></input>
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <input
        className="input-field"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Enter your password"
      ></input>
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <input
        className="input-field"
        type="password"
        name="passwordRepeat"
        value={formik.values.passwordRepeat}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Repeat your password"
      ></input>
      {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
        <div>{formik.errors.passwordRepeat}</div>
      ) : null}
      <button className="submit-btn" type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
