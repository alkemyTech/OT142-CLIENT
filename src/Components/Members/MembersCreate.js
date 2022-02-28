import "./MembersEdit.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const initialValues = {
    name: "",
    image: "",
    description: "",
    socialMedia: "",
};

const onSubmit = (values) => {
    console.log(values);
};

const FORMATS = [
    "image/png",
    "image/jpg"
];

const validationSchema = Yup.object({
    name: Yup.string()
        .required("Por favor, ingrese su nombre.")
        .min(4, "Debe contener una longitud mínima de 4 caracteres."),

    image: Yup.mixed()
        .required("Por favor, seleccione una imagen.")
        .test('fileFormat', 'Solo es válido formato .png o .jpg', (value) => {
            return value && FORMATS.includes(value.type);
        }),

    description: Yup.string()
        .required("Por favor, ingrese una descripción."),

    socialMedia: Yup.string()
        .required("Por favor, ingrese una URL.")
        .matches(
            /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-.]{3,}\.[a-z]{3}$/,
            "Por favor, ingresá una URL válida."
        ),
});

const MembersCreate = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });

    return (
        <Container className='form__contenedor'>
            <Heading className='form__titulo' as='h4' size='md' marginBottom={5}>
                Formulario Creación de Miembros
            </Heading>

            <form onSubmit={formik.handleSubmit} method='POST'>
                <FormControl marginBottom={5} isInvalid={formik.errors.name && formik.touched.name}>
                    <FormLabel htmlFor="email">Nombre</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese su Nombre"
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl marginBottom={5} isInvalid={formik.errors.image && formik.touched.image}>
                    <FormLabel htmlFor="image">Imagen</FormLabel>
                    <Input
                        type="file"
                        name="image"
                        onChange={(event, editor) => {
                            const file = event.target.files;
                            formik.setFieldValue('image', file[0]);
                        }}
                    />
                    <FormErrorMessage>{formik.errors.image}</FormErrorMessage>
                </FormControl>

                <FormControl marginBottom={5} isInvalid={
                    formik.errors.description && formik.touched.description
                }
                >
                    <FormLabel htmlFor="description">Descripción</FormLabel>
                    <CKEditor
                        config={{ name: "description" }}
                        editor={ClassicEditor}
                        data={formik.values.description}
                        name="description"
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            formik.setFieldValue("description", data);
                        }}
                        onBlur={(event, editor) => {
                            const data = editor.getData();
                            formik.setFieldValue("description", data);
                        }}
                    />
                    <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
                </FormControl>

                <FormControl marginBottom={5} isInvalid={
                    formik.errors.socialMedia && formik.touched.socialMedia}
                >
                    <FormLabel htmlFor="socialMedia">Redes sociales</FormLabel>
                    <Input
                        type="text"
                        name="socialMedia"
                        value={formik.values.socialMedia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese URL"
                    />
                    <FormErrorMessage>{formik.errors.socialMedia}</FormErrorMessage>
                </FormControl>

                <Button type='submit' colorScheme='blue' isFullWidth marginTop={5}>
                    Enviar
                </Button>
            </form>
        </Container>
    );
};

export default MembersCreate;