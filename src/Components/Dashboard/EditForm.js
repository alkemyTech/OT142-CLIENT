import '../FormStyles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Heading,
  Stack,
  Textarea,
  Flex
} from '@chakra-ui/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const initialValues = {
  name: '',
  logo: '',
  shortDescription: '',
  longDescription: '',
  socialLinks: ''
};

const onSubmit = (values) => {};

const FORMATS = ['application/png', 'application/jpg'];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Por favor ingrese su nombre')
    .min(6, 'Debe contener al menos 6 caracteres'),

  logo: Yup.mixed()
    .required('Por favor cargue un logo')
    .test('fileFormat', 'sòlo se permiten formatos .png o .jpg', (value) => {
      console.log('value dfile yup ', value);
      return value && FORMATS.includes(value.type);
    }),
  shortDescription: Yup.string()
    .required('Por favor ingrese una descripción corta')
    .min(6, 'Debe contener al menos 6 caracteres'),
  longDescription: Yup.string()
    .required('Por favor ingrese una descripción larga')
    .min(6, 'Debe contener al menos 6 caracteres'),
  socialLinks: Yup.string()
    .min(6, 'Debe contener al menos 6 caracteres')
    .matches(
      /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/,
      'Por favor ingrese una URL válida'
    )
});

const EditForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <Flex
      bg="secondary.background"
      minHeight="100%"
      width="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box
        width={{ base: '90%', md: '400px' }}
        bg="secondary.card"
        rounded="lg"
        p={5}
      >
        <Heading marginBottom="1.5rem">Edición</Heading>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <Stack spacing={4} marginBottom="1rem">
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <FormLabel htmlFor="email">Nombre</FormLabel>
              <Input
                variant="outline"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese nuevo nombre"
              ></Input>

              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.logo && formik.touched.logo}>
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="logo">Logo</FormLabel>
              </Stack>

              <Input
                // variant="outline"
                type="file"
                name="logo"
                // value={formik.values.logo}
                onChange={(event, editor) => {
                  const file = event.target.files;
                  formik.setFieldValue('logo', file);
                  // console.log({ event, editor });
                }}
              ></Input>

              <FormErrorMessage>{formik.errors.logo}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.shortDescription &&
                formik.touched.shortDescription
              }
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="shortDescription">
                  Descripción corta
                </FormLabel>
              </Stack>

              <CKEditor
                className="ck-editor__editable"
                config={{ name: 'shortDescription', placeholder: 'Ingrese nueva descripción corta' }}
                editor={ClassicEditor}
                data={formik.values.shortDescription}
                name="shortDescription"
                onChange={(event, editor) => {
                  const data = editor.getData();
                  formik.setFieldValue('shortDescription', data);
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  const data = editor.getData();
                  formik.setFieldValue('shortDescription', data);
                  console.log('Blur.', editor);
                }}
              />

              <FormErrorMessage>
                {formik.errors.shortDescription}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.longDescription && formik.touched.longDescription
              }
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="longDescription">Descripción larga</FormLabel>
              </Stack>

              <Textarea
                variant="outline"
                type="text"
                name="longDescription"
                value={formik.values.longDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese una nueva descripción"
              ></Textarea>

              <FormErrorMessage>
                {formik.errors.longDescription}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={
                formik.errors.socialLinks && formik.touched.socialLinks
              }
            >
              <Stack justifyContent="space-between" isInline>
                <FormLabel htmlFor="longDescription">Redes sociales</FormLabel>
              </Stack>

              <Input
                variant="outline"
                type="text"
                name="socialLinks"
                value={formik.values.socialLinks}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Ingrese una red social"
              ></Input>

              <FormErrorMessage>{formik.errors.socialLinks}</FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack marginBottom="1rem">
            <Button type="submit" size="md" variant="solid" colorScheme="teal">
              Editar
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default EditForm;
