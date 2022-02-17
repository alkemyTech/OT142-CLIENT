import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../FormStyles.css';

const SignupSchema = Yup.object().shape({
    name: Yup.string().email('Invalid email').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().email('Invalid email').required('Required'),
    roleId: Yup.string().email('Invalid email').required('Required')
  });

const UserForm = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        password: '',
        roleId: ''
    })

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'email'){
            setInitialValues({...initialValues, email: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <Formik>
            <form className="form-container" onSubmit={handleSubmit}>
                <input className="input-field" type="file"></input>
                <input className="input-field" type="text" name="name" value={initialValues.name || ''} onChange={handleChange} placeholder="Name"></input>
                <input className="input-field" type="text" name="email" value={initialValues.email || ''} onChange={handleChange} placeholder="Email"></input>
                <input className="input-field" type="password" name="password" value={initialValues.password || ''} onChange={handleChange} placeholder="Password"></input>
                <select className="input-field" value={initialValues.roleId || ''} onChange={e => setInitialValues({...initialValues, roleId: e.target.value})}>
                    <option value="" disabled >Select the role</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select>
                <button className="submit-btn" type="submit">Send</button>
            </form>
        </Formik>
    );
}
 
export default UserForm;