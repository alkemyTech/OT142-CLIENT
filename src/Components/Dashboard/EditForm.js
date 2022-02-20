import "../FormStyles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  Flex,
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const initialValues = {
  name: "",
  logo: "",
  shortDescription: "",
  longDescription: "",
  socialLinks: "",
};

const onSubmit = (values) => {
  const user = { ...values };

  localStorage.setItem("token", "tokenValueExample");
};

const FORMATS = [
  "application/png",
  "application/jpg"
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .min(6, "Must be at least 6 characters"),

  logo: Yup.mixed()
    .required("Please upload a logo")
    .test('fileFormat', '.png o .jpg only', (value) => {
      console.log("value dfile yup ", value); return value && FORMATS.includes(value.type);
    }),
  shortDescription: Yup.string()
    .required("Please enter a short description")
    .min(6, "Must be at least 6 characters"),
  longDescription: Yup.string()
    .required("Please enter a long description")
    .min(6, "Must be at least 6 characters"),
  socialLinks: Yup.string()
    //falta el matches url
    .min(6, "Must be at least 6 characters")
    .matches(
      /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/,
      "Please enter a valid url"
    ),
});

const EditForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container>
      <form className="form-container" onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.name && formik.touched.name}>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            variant="outline"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your name"
          ></Input>

          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={formik.errors.logo && formik.touched.logo}>
          <FormLabel htmlFor="logo">Logo</FormLabel>
          <Input
            // variant="outline"
            type="file"
            name="logo"
            // value={formik.values.logo}
            onChange={(event, editor) => {
              const file = event.target.files;
              // let myFiles = Array.from(file);                                    
              formik.setFieldValue('logo', file);
              console.log({ event, editor });
            }}
            
          ></Input>

          <FormErrorMessage>{formik.errors.logo}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={
            formik.errors.shortDescription && formik.touched.shortDescription
          }
        >
          <FormLabel htmlFor="shortDescription">Short description</FormLabel>
          <CKEditor
            config={{name: "shortDescription"}}
            editor={ClassicEditor}
            data={formik.values.shortDescription}
            name="shortDescription"
            onChange={(event, editor) => {
              const data = editor.getData();
              formik.setFieldValue("shortDescription", data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              const data = editor.getData();
              formik.setFieldValue("shortDescription", data);
              console.log("Blur.", editor);
            }}
          />

          <FormErrorMessage>{formik.errors.shortDescription}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={
            formik.errors.longDescription && formik.touched.longDescription
          }
        >
          <FormLabel htmlFor="longDescription">Long description</FormLabel>
          <Input
            variant="outline"
            type="text"
            name="longDescription"
            value={formik.values.longDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Write a long description"
          ></Input>

          <FormErrorMessage>{formik.errors.longDescription}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.socialLinks && formik.touched.socialLinks}
        >
          <FormLabel htmlFor="longDescription">Social links</FormLabel>
          <Input
            variant="outline"
            type="text"
            name="socialLinks"
            value={formik.values.socialLinks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter a social link"
          ></Input>

          <FormErrorMessage>{formik.errors.socialLinks}</FormErrorMessage>
        </FormControl>
        <Flex mt="4">
          <Button type="submit" size="md" variant="solid" colorScheme="teal">
            Edit
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default EditForm;
