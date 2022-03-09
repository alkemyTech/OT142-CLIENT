import { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
/* import { MdTitle, MdImage } from 'react-icons/md'; */
import { useParams } from 'react-router-dom'
import { API } from './hooks/API';

const ProjectsForm = ({ updatedValues }) => {

  const { id } = useParams();

  const [initialValues, setIntialValues] = useState(
    { title: '', description: '', image: '', due_date: '' }
  )

  useEffect(() => {
    if (updatedValues) {
      setIntialValues(updatedValues); //con esto rellenamos los campos si existe un objeto para actualizar
    }
  }, [updatedValues]);

  const ProjectsSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    description: Yup.string()
      .required(`Description is required`),
    image: Yup.string()
      .required('Image is required')
  });

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column-reverse">

      <Box p="8">

        <Box textAlign="center">
          <Heading size="md">Manage projects</Heading>
        </Box>

        <Box my="4">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={ProjectsSchema}

            onSubmit={async (values, action) => {
              if (!updatedValues) {
                const gg = await API.post('/projects', values);
                console.log(gg);
                console.log('Project created');
              } else {
                await API.put(`/projects/${id}`, values);
                console.log('Project updated');
              }
              action.setSubmitting(false);
              action.resetForm();
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <FormControl isRequired isInvalid={errors.title}>
                  <FormLabel>Title</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                    /* children={<Icon as={MdTitle} />} */
                    />
                    <Input
                      type="text"
                      name='title'
                      placeholder="Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  {errors.title && <FormErrorMessage p="2" bg="red.100">{errors.title}</FormErrorMessage>}
                </FormControl>

                <FormControl mt="4" isRequired isInvalid={errors.description}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    name='description'
                    placeholder=' Message'
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.description && <FormErrorMessage p="2" bg="red.100">{errors.description}</FormErrorMessage>}
                </FormControl>

                <FormControl mt="4" isRequired isInvalid={errors.image}>
                  <FormLabel>Image</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                    /*  children={<Icon as={MdImage} />} */
                    />
                    <Input
                      type="file"
                      name='image'
                      accept='.png, .jpg'
                      onChange={(e) => {
                        const file = e.currentTarget.files[0];
                        setFieldValue('image', URL.createObjectURL(file));
                      }}
                      onBlur={handleBlur}
                    />
                  </InputGroup>
                  {errors.image && <FormErrorMessage p="2" bg="red.100">{errors.image}</FormErrorMessage>}
                </FormControl>

                <FormControl mt="4">
                  <FormLabel>Due date</FormLabel>
                  <Input
                    type="date"
                    name='due_date'
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControl>

                <Button colorScheme="blue" mt="4" w="100%" type='Submit'>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProjectsForm;