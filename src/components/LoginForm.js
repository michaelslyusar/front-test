import React from 'react';
import { Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import setAuthorizationToken from './utils/setAuthorizationToken';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users/1',
});

const initialValues = {
    email: '',
    password: ''
};

const onSubmit = (values,props) => {
    
};

const validationSchema = Yup.object({
    email: Yup.string().email('Incorrect email format').required('Required!'),
    password: Yup.string().max(10, "The password is too long")

});

const LoginForm = (props) => {
    return (
        <div className="login-form mt6">
            <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {(values, props) => 
                api.get('/').then(res => {
                    console.log(props);
                    localStorage.setItem('token',res.data['email']);
                    // setAuthorizationToken(res.data['email']);
                    axios.defaults.headers.common['Authorization'] = 'Bearer test';
                    props.history.push("/posts");  
                })
            }
        >
            <Form>
                {/* Email */}
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email"/>

                {/* Password */}
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password"/>
                <ErrorMessage name="password"/>

                <button className="login-button center-50" type="submit">Login</button>
            </Form>
        </Formik>

        </div>
        


    );
}

export default LoginForm;