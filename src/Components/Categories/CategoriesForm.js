import React, { useEffect, useState } from "react";
import "../FormStyles.css";
import {
  postRequest,
  patchRequest,
  getRequest,
  GetCategie,
} from "../../Services/ServiceCategories";
import {
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Heading,
  
} from "@chakra-ui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styleCS from "./styleCS.css";
import { useParams } from "react-router-dom";
import axios from 'axios'

const state = {
  name: "",
  description: "",
  image: "",
};

const CategoriesForm = () => {
  const { categorie } = useParams();
  const [initialValues, setInitialValues] = useState(state == false);

  useEffect(() => {
    if (categorie) {
      var BASE_URL = `http://ongapi.alkemy.org/api/categories/${categorie}`;
      axios
        .get(BASE_URL)
        .then((res) => res.data.data)
        .then((data) => {
          setInitialValues({
            name: data.name,
            description: data.description,
            image: data.image,
          });
        });
    }
  }, [categorie]);
  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviado ", initialValues);
    if (categorie.id) {
      patchRequest(`categories/${categorie.id}`, initialValues).then((data) => {
        console.log(data);
      });
    } else {
      postRequest("/categories", initialValues).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <>
      <form className="global" onSubmit={handleSubmit}>
        <Stack>
          <Heading>Edit/Categorie</Heading>
        </Stack>
        <Stack>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Name</FormLabel>
            <Input
              isInvalid
              focusBorderColor="red.300"
              variant="filled"
              type="text"
              minLength={4}
              name="name"
              value={initialValues.name}
              onChange={handleChange}
              placeholder="Name"
            ></Input>
          </FormControl>
        </Stack>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Description</FormLabel>
            <CKEditor
              config={{ placeholder: "...Description" }}
              editor={ClassicEditor}
              data={initialValues.description}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
                setInitialValues({ ...initialValues, description: data });
              }}
            />
          </FormControl>
        </Stack>

        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="first-name">Image</FormLabel>

            <Input
              accept="image/x-png,image/jpeg"
              id="image"
              type="file"
              variant="flushed"
              onChange={(event) => {
                const files = event.target.files;
                let myFiles = Array.from(files);
                setInitialValues({
                  ...initialValues,
                  image: myFiles[0].name,
                });
              }}
              mb={2}
            />

            <Image id="img-preview"></Image>
          </FormControl>
        </Stack>

        <Stack spacing={4}>
          <Button mt={4} colorScheme="teal" type="submit">
            Send
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default CategoriesForm;

