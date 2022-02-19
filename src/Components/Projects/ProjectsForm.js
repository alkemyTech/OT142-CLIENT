import React, { useState, useEffect } from 'react';
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
import { ProjectsSchema } from './ProjectsSchema';
import { MdTitle, MdImage } from 'react-icons/md';

const ProjectsForm = ({ patchObject }) => {

  //Por ahora guardamos los valores en estado hasta implementar peticiones
  const [inputValues, setInputValues] = useState(null);

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues])

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column-reverse">

      <Box p="8">

        <Box textAlign="center">
          <Heading size="md">Manage projects</Heading>
        </Box>

        <Box my="4">
          <Formik
            initialValues={{ title: '', description: '', image: '', due_date: '' }}

            validationSchema={ProjectsSchema}

            onSubmit={(values, action) => {
              setInputValues(values);
              action.setSubmitting(false);
              action.resetForm();
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <FormControl isRequired isInvalid={errors.title}>
                  <FormLabel>Title</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={MdTitle} />}
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
                      children={<Icon as={MdImage} />}
                    />
                    <Input
                      type="file"
                      name='image'
                      accept='.png, .jpg'
                      value={values.image}
                      onChange={handleChange}
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