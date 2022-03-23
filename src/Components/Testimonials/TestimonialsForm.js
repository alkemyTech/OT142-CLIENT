import React, { useState } from 'react';
import '../FormStyles.css';
import { Box, FormControl, FormErrorMessage, FormLabel, Heading, VStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from 'react-router-dom';

// <TestimonialForm { ...responseAPI} />
const TestimonialForm = (testimonialData) => {
  const [values, setValues] = useState([]);
  console.log('valores ingresados: ', values);

  const location = useLocation().pathname.toLocaleLowerCase();

  const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
    'image/png'
  ];

  const initialValues = {
    name: testimonialData?.name || '',
    description: testimonialData?.description || '',
    image: testimonialData?.image || ''
  };

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required('Nombre requerido')
      .min(4, 'Se requieren al menos 4 caracteres'),
    description: Yup.string()
      .required('Descripción requerida'),
    image: Yup.mixed()
      .required('Imagen requerida')
      .test('fileFormat', 'Formato no soportado: ingrese extensión .jpg o .png',
        value => value && SUPPORTED_FORMATS.includes(value.type)
      )
  });
  return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit= {(values, { resetForm }) => {
              if (location.includes('create')) {
                // postTestimonialCreate(values)
                setValues(values);
              } else if (location.includes('edit')) {
                // patchTestomonialEdit(values))
                setValues(values);
              }
              resetForm();
            }}
        >
            {formik => (
                <VStack
                    as='form'
                    mx='auto'
                    w={{ base: '90%', md: 500 }}
                    h='100vh'
                    justifyContent='center'
                    onSubmit={formik.handleSubmit}>

                        <Box
                            w='100%'
                            p={4}
                            bg='tomato'
                            color='white'
                            textAlign='center'>
                               <Heading >Formulario Edición / Creación de Testimonios</Heading>
                        </Box>

                        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                            <FormLabel>Título del testimonio</FormLabel>
                            <Input
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                type='text'
                                name='name'
                                placeholder='Título'
                                onBlur={formik.handleBlur}/>
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.description && formik.touched.description}>
                            <FormLabel>Descripción del testimonio</FormLabel>
                            <CKEditor
                                config={{ placeholder: '...' }}
                                editor={ClassicEditor}
                                data={formik.values.description}

                                onChange={(event, editor) => {
                                  const data = editor.getData();
                                  formik.setFieldValue('description', data);
                                }}
                            />
                                <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.image && formik.touched.image}>
                            <FormLabel>Imagen</FormLabel>
                            <Input
                                id='image'
                                type='file'
                                variant='flushed'
                                onChange={event => {
                                  const files = event.target.files;
                                  const myFiles = Array.from(files);
                                  formik.setFieldValue('image', myFiles[0]);
                                }}
                            />
                                <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                        </FormControl>

                        <Button
                            type='submit'
                            size='md'
                            variant='solid'
                            colorScheme='teal'>
                            Enviar
                        </Button>

                  </VStack>
            )}
        </Formik>
  );
};
export default TestimonialForm;
