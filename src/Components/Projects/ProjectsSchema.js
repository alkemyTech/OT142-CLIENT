import * as Yup from 'yup';
export const ProjectsSchema = Yup.object().shape({
    title: Yup.string()
    .required('Title is required'),
    description: Yup.string()
    .required(`Description is required`),
    image: Yup.string()
    .required('Image is required')
});