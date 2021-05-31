import React from 'react';
import { Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    username: '', //Corresponds with the name field
    email: '',
    password: ''
};

const onSubmit = values => {
    console.log('Form Values', values);
};

const validationSchema = Yup.object({
    username: Yup.string().required('Required!'),
    email: Yup.string().email('Incorrect email format').required('Required!'),
    password: Yup.string().max(10, "The password is too long")

});

const FormikRegistrationForm = () => {
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            <Form>
                {/* Username */}
                <label htmlFor="username" className="form-label">Username</label>
                <Field type ="text" id="username" name ="username"/>
                <ErrorMessage name="username"/>
               
                {/* Email */}
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email"/>

                {/* Password */}
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password"/>
                <ErrorMessage name="password"/>

                <button className="register-button center-50" type="submit">Register</button>
            </Form>
        </Formik>


    );
}

export default FormikRegistrationForm;