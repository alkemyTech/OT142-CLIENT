import '../FormStyles.css';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  const [inputValue, setInputValue] = useState({});

  console.log(inputValue);

  return (
        <div className="contenedor">
            <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validate={(values) => {
                  const errores = {};
                  // Validación email
                  if (!values.email) {
                    errores.email = 'Por favor, ingresá tu correo electrónico.';
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      values.email
                    )
                  ) {
                    errores.email =
                            'Debe contener solo letras, números, guiones o puntos.';
                  }
                  // Validación password
                  if (!values.password) {
                    errores.password = 'Por favor, ingresá tu contraseña.';
                  } else if (
                    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                      values.password
                    )
                  ) {
                    errores.password =
                            'Debe contener una longitud mínima de 6 caracteres, y  al menos un número, una letra y un símbolo (por ejemplo @#$%).';
                  }
                  return errores;
                }}
                onSubmit={(values, { resetForm }) => {
                  setInputValue(values);
                  resetForm();
                }}
            >
                {({ errors }) => (
                    <Form className="formulario">
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                type="email"
                                name="email"
                                placeholder="correo@correo.com"
                            />
                            <ErrorMessage
                                name="email"
                                component={() => <div className="error">{errors.email}</div>}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                placeholder="contraseña"
                            />
                            <ErrorMessage
                                name="password"
                                component={() => <div className="error">{errors.password}</div>}
                            />
                        </div>

                        <button type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
  );
};

export default LoginForm;
