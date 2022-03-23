import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditHomeForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [editData, setEditData] = useState({});
  const [sendedForm, setSendedForm] = useState(false);

  const validate = Yup.object({
    welcomeText: Yup.string()
      .min(20, 'El texto debe tener un minimo de 20 caracteres')
      .required('El campo es obligatorio'),
    slide1Text: Yup.string()
      .required('El campo es obligatorio'),
    slide2Text: Yup.string()
      .required('El campo es obligatorio'),
    slide3Text: Yup.string()
      .required('El campo es obligatorio')
  });

  return (
        <>
            <Formik
                initialValues={{
                  welcomeText: '',
                  slide1Text: '',
                  slide1IMG: null,
                  slide2Text: '',
                  slide2IMG: null,
                  slide3Text: '',
                  slide3IMG: null
                }}
                validationSchema={validate}

                onSubmit={(values, { resetForm }) => {
                  resetForm();
                  setEditData(values);
                  setSendedForm(true);
                }}
            >
            {({ errors }) => (
                <Form className='formulario'>
                    <div>
                        <label htmlFor="welcomeText">Texto de Bienvenida</label>
                        <Field
                            type='text'
                            id='welcomeText'
                            name='welcomeText'
                            placeholder='Ingresa un texto de bienvenida'
                            />
                            <ErrorMessage name='welcomeText' component={() => (<div className='error'>{errors.welcomeText}</div>)}/>
                    </div>
                    <div>
                        <label htmlFor='slide1'>Texto de slide 1</label>
                        <Field
                            type='text'
                            id='slide1Text'
                            name='slide1Text'
                            placeholder='Ingresa un texto'
                            />
                            <ErrorMessage name='slide1Text' component={() => (<div className='error'>{errors.slide1Text}</div>)}/>
                        <Field
                            type='file'
                            id='slide1IMG'
                            name='slide1IMG'
                            placeholder='Ingresa una imagen'
                            />
                    </div>
                    <div>
                        <label htmlFor='slide2'>Slide 2</label>
                        <Field
                            type='text'
                            id='slide2Text'
                            name='slide2Text'
                            placeholder='Ingresa un texto'
                            />
                            <ErrorMessage name='slide2Text' component={() => (<div className='error'>{errors.slide2Text}</div>)}/>
                        <Field
                            type='file'
                            id='slide2IMG'
                            name='slide2IMG'
                            placeholder='Ingresa una imagen'
                            />
                    </div>
                    <div>
                        <label htmlFor='slide3'>Slide 3</label>
                        <Field
                            type='text'
                            id='slide3Text'
                            name='slide3Text'
                            placeholder='Ingresa un texto'
                            />
                            <ErrorMessage name='slide3Text' component={() => (<div className='error'>{errors.slide3Text}</div>)}/>
                        <Field
                            type='file'
                            id='slide3IMG'
                            name='slide3IMG'
                            placeholder='Ingresa una imagen'
                            />
                    </div>
                    <button type="submit">Editar</button>
                    {sendedForm && <p>Formulario de edición enviado con éxito!</p>}
                </Form>
            )}

            </Formik>

        </>
  );
};

export default EditHomeForm;
