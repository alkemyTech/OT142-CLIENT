import {  Box, FormControl, FormErrorMessage, FormLabel, Heading,  VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Formik } from "formik";
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState } from 'react';

//PETICIONES PARA SER USADAS POSTERIORMENTE 

// const url = 'http://ongapi.alkemy.org/api';
// const endpoint = 'activities'
//pedir id

//petición para tomar actividades    
// const GetActivities = async (endpoint, id = null, url) => {
//     try {
//         const data = await axios.get(`${url}/${endpoint}${id}`);
//         return data;
//     } catch (error) {
//         return error;
//     }
// };
//petiición para crear actividades   
// const postActivitiesCreate = async (endpoint, body, id = null, url) => {
//     try {
//         const resp = await axios.post(`${url}/${endpoint}/${id}`, body, {
//             headers: token,
//         });
//         return resp;
//     } catch (error) {
//        console.error(error);
//     }
// };
//petiición para editar actividades   
// const  patchActivitiesEdit = async (endpoint, body, id = null, url ) => {
//     try {
//         const resp = await axios.patch(`${url}/${endpoint}/${id}`, body, {
//             headers: token,
//         });
//         return resp;
//     } catch (error) {
//        console.error(error);
//     }
// };


const ActivitiesForm = () => {

    const [values, setValues] = useState([])
    console.log(`valores ingresados: `, values)
    
    //Returns the url string but converted to lowercase
    const location = useLocation().pathname.toLocaleLowerCase();   

    const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/png"
    ];

    const responseAPI = {
       "id": 0,
        "name": "",
        "image": "",
        "description": "",
        "created_at": "2022-02-17T20:56:26.749Z",
        "updated_at": "2022-02-17T20:56:26.749Z",
        "deleted_at": "2022-02-17T20:56:26.749Z" 
    }

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("Nombre requerido"),
        description: Yup.string(),       
        image: Yup.mixed()
            .required("Imagen requerida")
            .test("fileFormat", "Formato no soportado: ingrese extensión .jpg o .png",
            value=> value &&   SUPPORTED_FORMATS.includes(value.type)
        )      
    })

    const initialValues = {
        name: responseAPI?.name || '',
        description: responseAPI?.description || '',
        image: responseAPI?.image || '',
    };       
    
    return (        
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}            
            onSubmit= {(values,actions) =>{
                if(location.includes('create')){
                    // postActivitiesCreate(values)                     
                    setValues(values)                      
                }else if (location.includes('edit')){
                    // patchActivitiesEdit(values)   
                    setValues(values)
                }                
            }}
        
        >
            {formik =>(
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
                                onBlur={formik.handleBlur}/>
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.description && formik.touched.description}>
                            <FormLabel>Descripción de la actividad</FormLabel>
                            <CKEditor
                                editor={ClassicEditor}
                                config={{placeholder: "..."}}
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