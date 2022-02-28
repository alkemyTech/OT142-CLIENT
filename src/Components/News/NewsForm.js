import React, { useEffect, useState } from 'react';
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
import useForm from '../../hooks/useForm';
import { messageErrors } from '../../utils/messageErrors';
import axios from 'axios';

const BASE_URL = 'http://ongapi.alkemy.org/api/';

const getNew = async(id) => {

    let getData = {
        data: {},
        err: null
    };

    try{

        const res = await axios.get(`${BASE_URL}/news/${id}`);
        const { data } = await res.data;
        const { name, image, content, category_id } = data;

        getData = {
            ...getData,
            data: {
                title: name,
                content,
                category: category_id || '',
                image
            }
        }

    }catch(error){
        getData = {
            data: {},
            err: {
                message: 'Id no encontrado',
                status: true,
                error
            }
        }
    }

    return getData
}


const {title, shortDescription, category, logo} = messageErrors

const initialState = {
    data: {
        title: '',
        content: '',
        category: '',
        image: '',
    },
    err: null
}

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
];

const formNewsSchema = Yup.object().shape({
    title: Yup.string()
        .required(title.messageRequired)
        .min(4, title.minCharacters),
    content: Yup.string()
        .required(shortDescription.messageRequired),
    category: Yup.string()
        .required(category.messageRequired),
    image: Yup.mixed()
        .required(logo.messageRequired)
        .test("fileFormat", logo.formatInvalid, value => value && SUPPORTED_FORMATS.includes(value.type))
})


const NewsForm = () => {

    const { id } = useParams();
    const {
        form,
        setForm
    } = useForm(initialState);
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        if(id){
            getNew(id)
                .then(res => setForm({...res}))
        }

    }, [id, setForm])

    // useEffect(() => {
    //     console.log(categories)
    // }, [])

    return (
        <>
            {
                form.err ?

                <Box                            
                    w="100%"
                    p={4}
                    bg="red.600"
                    color="white"
                    textAlign="center">
                    <Heading>{form.err.message}</Heading>
                </Box>

                :

                <Formik
                    enableReinitialize={true}
                    initialValues={form.data || initialState}
                    validationSchema={formNewsSchema}       
                    onSubmit={(values, {resetForm}) => {

                        const data = {
                            name: values.title,
                            content: values.content,
                            category_id: values.category
                        }

                        if(id){
                            //patchNew(id, data)
                            alert(JSON.stringify(data, null, 2));
                        }else{
                            //postNew(data)
                            alert(JSON.stringify(data, null, 2));
                        }

                        setForm(initialState);
                        resetForm();
                        
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
                                        {
                                            categories.map(cat => {
                                                return <option value={cat} key={cat}>Categoria {cat}</option>
                                            })
                                        }
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
                                            let [myFile] = Array.from(files);               
                                            formik.setFieldValue('image', myFile);                        
                                        }}
                                        mb={2}
                                    />
                                    <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                                    {
                                        form.data.image !== '' &&
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
            }
        </>
    )
}
 
export default NewsForm;