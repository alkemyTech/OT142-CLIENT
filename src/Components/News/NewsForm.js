import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { 
    Button, 
    Stack,
    Input,
    Select,
    Img
} from '@chakra-ui/react'
import axios from 'axios';
import '../FormStyles.css';

const NewsForm = () => {
    const [initialValues, setInitialValues] = useState({
        title: '',
        content: '',
        category: '',
        image: ''
    });

    const { id } = useParams();

    useEffect(() => {

        const URL = 'http://ongapi.alkemy.org/api/categories'

        const getCategory = async() => {

            const res = await axios.get(`${URL}/${id}`)
            const {data} = await res.data;

            setInitialValues({
                title: data.name,
                content: data.description,
                category: '',
                image: data.image
            })
        }

        if(id){
            getCategory()
        }

    }, [id])

    const handleChange = (e) => {
        setInitialValues({
            ...initialValues,
            [e.target.name]: e.target.value
        })
    }

    const handleContent = (e, editor) => {
        const data = editor.getData();
        
        setInitialValues({
            ...initialValues,
            content: data 
        })
    }

    const handleImage = (e) =>{
        setInitialValues({
            ...initialValues,
            image: e.target.files[0].name 
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(initialValues, null, 2));
    }

    console.log(initialValues)

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <Stack spacing={13} p={10}>
                <Input name="title" value={initialValues.title} onChange={handleChange} mb={2} />
                <CKEditor
                        editor={ ClassicEditor }
                        // data={initialValues.content}
                        onChange={handleContent}
                />
                <Select name="category" value={initialValues.category} onChange={handleChange}>
                    <option value="" disabled>Select category</option>
                    <option value="1">Demo option 1</option>
                    <option value="2">Demo option 2</option>
                    <option value="3">Demo option 3</option>
                </Select>
                <input type='file' onChange={handleImage}></input>
                {
                    initialValues.image !== '' &&
                        <Img 
                            src={initialValues.image} 
                            alt={initialValues.title}
                            boxSize='150px'
                            objectFit='cover'
                            mb={2}
                        />
                }
                <Button colorScheme="blue" type="submit">Send</Button>
            </Stack> 
        </form>
    );
}
 
export default NewsForm;