import { Box, FormControl, FormErrorMessage, FormLabel, Heading, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Formik } from "formik";
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import { post } from "../../Services/publicApiService";

//<ActivitiesForm { ...responseAPI} />
const ActivitiesForm = (activitiesData) => {

    /*     const [values, setValues] = useState([])
        console.log(`valores ingresados: `, values) */

    //Returns the url string but converted to lowercase
    const location = useLocation().pathname.toLocaleLowerCase();

    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/png"
    ];

    const initialValues = {
        name: activitiesData?.name || '',
        description: activitiesData?.description || '',
        image: activitiesData?.image || '',
    };

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("Nombre requerido"),
        description: Yup.string(),
        image: Yup.mixed()
            .required("Imagen requerida")
            .test("fileFormat", "Formato no soportado: ingrese extensión .jpg o .png",
                value => value && SUPPORTED_FORMATS.includes(value.type)
            )
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={(values, { resetForm }) => {
                if (location.includes('create')) {
                    post('/activities', values)
                    console.log(values)

                } else if (location.includes('edit')) {
                    console.log(values)
                }
                resetForm()
            }}

        >
            {formik => (
                <VStack
                    as="form"
                    mx="auto"
                    w={{ base: "90%", md: 500 }}
                    h="100vh"
                    justifyContent="center"
                    onSubmit={formik.handleSubmit}>

                    <Box
                        w="100%"
                        p={4}
                        bg="tomato"
                        color="white"
                        textAlign="center"
                    >
                        <Heading >Formulario Edición / Creación de Actividades</Heading>
                    </Box>

                    <FormControl isInvalid={formik.errors.name && formik.touched.name}>
                        <FormLabel>Título de la actividad</FormLabel>
                        <Input
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            type="text"
                            name="name"
                            placeholder="Título"
                            onBlur={formik.handleBlur} />
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={formik.errors.description && formik.touched.description}>
                        <FormLabel>Descripción de la actividad</FormLabel>
                        <CKEditor
                            editor={ClassicEditor}
                            config={{ placeholder: "..." }}
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
                            id="image"
                            type="file"
                            variant="flushed"
                            onChange={event => {
                                const files = event.target.files;
                                let myFiles = Array.from(files);
                                formik.setFieldValue('image', myFiles[0]);
                            }}
                        />
                        <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                    </FormControl>

                    <Button
                        type="submit"
                        size='md'
                        variant="solid"
                        colorScheme="teal">
                        Enviar
                    </Button>

                </VStack>
            )}
        </Formik>
    );
}
export default ActivitiesForm;