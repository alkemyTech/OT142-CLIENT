import React, { useState } from 'react';
import '../FormStyles.css';
import { useDispatch } from 'react-redux';

import {
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  VStack,
  Box
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { newSlideSlice, putSlideSlice } from '../../app/features/slidesSlice';
import { toBase64 } from '../../utils/toBase64';

const SlidesForm = ({ state }) => {
  // eslint-disable-next-line no-undef
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    name: state?.name || '',
    description: state?.description || '',
    order: state?.order || 0,
    image: state?.image || ''
  });

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === 'description') {
      setInitialValues({ ...initialValues, description: e.target.value });
    }
    if (e.target.name === 'order') {
      setInitialValues({ ...initialValues, order: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialValues) {
      dispatch(newSlideSlice(initialValues));
    } else {
      dispatch(putSlideSlice(initialValues));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <VStack
        mx='auto'
        w={{ base: '90%', md: 500 }}
        h='100vh'
        justifyContent='center'
      >
        <Box w='100%' p={4} bg='teal' color='white' textAlign='center'>
          <Heading>Formulario Edición / Creación de Slides</Heading>
        </Box>

        <FormControl isRequired>
          <FormLabel htmlFor='first-name'>Name</FormLabel>
          <Input
            minLength={4}
            variant='filled'
            type='text'
            name='name'
            value={initialValues.name}
            onChange={handleChange}
            placeholder='Name'
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='first-name'>Order</FormLabel>
          <Input
            variant='filled'
            type='text'
            name='order'
            value={initialValues.order}
            onChange={handleChange}
            placeholder='order'
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor='first-name'>Description</FormLabel>
          <CKEditor
            config={{ placeholder: '...Description' }}
            editor={ClassicEditor}
            data={initialValues.description}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              setInitialValues({ ...initialValues, description: data });
            }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor='first-name'>Image</FormLabel>
          <Input
            accept='image/x-png,image/jpeg'
            id='image'
            type='file'
            variant='flushed'
            onChange={async (e) => {
              const file = e.currentTarget.files[0];
              const imagen = await toBase64(file);
              setInitialValues({
                ...initialValues,
                image: imagen
              });
            }}
            mb={2}
          />
          <Image id='img-preview'></Image>
        </FormControl>

        <Stack w={'100%'}>
          <Button type='submit' size='md' variant='solid' colorScheme='teal'>
            Enviar
          </Button>
        </Stack>
      </VStack>
    </form>
  );
};

export default SlidesForm;
