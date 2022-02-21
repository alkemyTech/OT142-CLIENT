import axios from 'axios';

//Lo hago de esta forma para no crear 2 funciones "create" y "update" casi con el mismo codigo repetido
const createProject = async (id = 0, values) => {
    const URL = `http://ongapi.alkemy.org/api/projects`;
    try {
        const result = await axios({
            url: !id ? URL : URL + `/${id}`,
            method: !id ? 'POST' : 'PUT',
            data: values
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}
export default createProject;