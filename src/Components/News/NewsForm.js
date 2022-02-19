import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom'
import { Formik } from "formik";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { 
    Button,
    Input,
    Select,
    Img,
    Box,
    Heading,
    FormControl, 
    FormErrorMessage, 
    FormLabel,
    VStack
} from '@chakra-ui/react'

// Custom
import '../FormStyles.css';
import { getNew, postNew, patchNew } from '../../Services/publicApiService';
import useForm from '../../hooks/useForm';


const initialState = {
    data: {
        title: '',
        content: '',
        category: '',
        image: '',
    },
    err: null
}

// const SUPPORTED_FORMATS = [
//     "image/jpg",
//     "image/jpeg",
//     "image/png"
//   ];

const NewsForm = () => {

    const { id } = useParams();
    const {
        form,
        setForm
    } = useForm(initialState);

    useEffect(() => {

        if(id){
            getNew(id)
                .then(res => setForm({...res}))
        }

    }, [id, setForm])

    console.log(form)

    const formNewsSchema = Yup.object().shape({
        title: Yup.string()
            .required("Nombre requerido")
            .min(4, 'Se requieren al menos 4 caracteres'),
        content: Yup.string()
            .required("Descripción requerida"),
        category: Yup.string()
            .required("Categoria requerida")  
    })
    // image: Yup.mixed()
    // .required("Imagen requerida")
    // .test("fileFormat", "Formato no soportado: ingrese extensión .jpg o .png",
    // value=> value && SUPPORTED_FORMATS.includes(value.type)) 

    return (
        <Formik
            enableReinitialize={true}
            initialValues={form.data}
            validationSchema={formNewsSchema}       
            onSubmit={(values) => {

                if(id){
                    console.log('actualizar')
                    patchNew(values).then(res => console.log(res))
                    alert(JSON.stringify(values, null, 2));
                }else{
                    console.log('create')
                    postNew(values).then(res => console.log(res))
                    alert(JSON.stringify(values, null, 2));
                }

                console.log(values)
                
            }}        
        >
            {formik =>(
                
                <VStack 
                    as="form"
                    mx="auto"
                    w={{ base: "90%", md: 800 }}
                    justifyContent="center"
                    onSubmit={formik.handleSubmit}>

                        <Box                            
                            w="100%"
                            p={4}
                            bg="teal.600"
                            color="white"
                            textAlign="center">
                            <Heading>{ id ? 'Editar novedad' : 'Crear novedad'}</Heading>
                        </Box>

                        <FormControl isInvalid={formik.errors.title && formik.touched.title}>
                            <FormLabel>Título de la novedad</FormLabel>
                            <Input 
                                onChange={formik.handleChange} 
                                value={formik.values.title}
                                type="text" 
                                name="title" 
                                placeholder="Título"
                                onBlur={formik.handleBlur} 
                            />
                            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.content && formik.touched.content}>
                            <FormLabel>Contenido de la novedad</FormLabel>
                            <CKEditor
                                config={{placeholder: "..."}} 
                                editor={ClassicEditor}
                                data={formik.values.content}
                                                       
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    formik.setFieldValue('content', data);
                                }}
                            />                          
                            <FormErrorMessage>{formik.errors.content}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={formik.errors.category && formik.touched.category}>
                            <Select name="category" value={formik.values.category} onChange={formik.handleChange}>
                                <option value="" disabled>Select category</option>
                                <option value="1">Demo option 1</option>
                                <option value="2">Demo option 2</option>
                                <option value="3">Demo option 3</option>
                            </Select>
                            <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
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
                                mb={2}
                            />
                            <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                            {
                                formik.values.image !== '' &&
                                    <Img 
                                        src={form.data.image} 
                                        alt={form.data.title}
                                        boxSize='150px'
                                        objectFit='cover'
                                    />
                            }
                        </FormControl>               
                            
                        <Button 
                            type="submit" 
                            size='md'  
                            variant="solid" 
                            colorScheme="teal">
                            {id ? 'Editar' : 'Crear'}
                        </Button>

                  </VStack>
            )}
        </Formik> 
    )
}
 
export default NewsForm;