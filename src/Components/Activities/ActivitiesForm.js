import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { postActivity } from '../../Services/activitiesService';
import { showAlertOkey } from '../../Services/AlertServicie/AlertServicie';
import { useHistory } from 'react-router-dom';
import Spinner from '../Spinner';

// Esto es para convertir la imagen en base64
const toB64 = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
      return base64data;
    };
  });
};

const ActivitiesForm = () => {
  const history = useHistory();

  const valuesSchema = Yup.object().shape({
    name: Yup.string()
      .required('Debes ingresar un nombre'),
    image: Yup.string()
      .required('Debes subir una imagen')
  });

  return (
    <Formik
      enableReinitialize={true}

      initialValues={{ name: '', description: '', image: '' }}

      validationSchema={valuesSchema}

      onSubmit={async (values, action) => {
        try {
          const result = await postActivity(values);
          if (result.success) {
            showAlertOkey({ text: '¡Actividad creada con exito!' });
            history.push('/backoffice/activities');
          }
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        action.setSubmitting(false);
        action.resetForm();
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors, setFieldValue, isSubmitting }) => (
        <Flex justifyContent='center' alignItems='center'>
          <Flex borderRadius='md' p='4' flexDirection='column' justifyContent='center' alignItems='center' bg='gray.200'>
            <Image src='/images/LOGO-SOMOS-MAS.png' boxSize='150px' />
            <Text fontSize='lg'>Formulario creación / edición de actividades</Text>

            <FormControl mt='4' isInvalid={errors.name} isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input onChange={handleChange} onBlur={handleBlur} value={values.name} bg='white' type='text' placeholder='Ingrese un nombre' name='name' />
              {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
            </FormControl>

            <FormControl mt='4'>
              <FormLabel>Descripción</FormLabel>
              <CKEditor
                editor={ClassicEditor}
                id='description'
                data={values.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFieldValue('description', data);
                }}
              />
            </FormControl>

            <FormControl mt='4' isInvalid={errors.image} isRequired>
              <FormLabel>Imagen</FormLabel>
              <Input
                name='image'
                bg='white'
                type='file'
                accept='.png, .jpg'
                onChange={async (e) => {
                  handleChange(e);
                  const img = e.currentTarget.files[0];
                  const file = await toB64(URL.createObjectURL(img));
                  setFieldValue('image', file);
                }}
                onBlur={handleBlur}
              />
              {errors.image && <FormErrorMessage>{errors.image}</FormErrorMessage>}
            </FormControl>
            {isSubmitting
              ? <Spinner isLoading={isSubmitting} size='40px' color='blue'
            />
              : <Button mt='4' onClick={handleSubmit}>Confirmar</Button>}

          </Flex>
        </Flex>
      )}
    </Formik>
  );
};
export default ActivitiesForm;
