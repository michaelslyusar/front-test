import React from 'react';
import { useFormik } from 'formik';
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

const validate = values => {
    let errors = {}

    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

const FormikRegistrationForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })

    console.log('Form values', formik.values)
    console.log('Form touched', formik.touched)
    console.log('Form errors', formik.errors)
    return (
        <form className="register-form center-25 mt6" onSubmit={formik.handleSubmit}>

            {/* Username */}
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text"
                name="username"
                {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username ? <div className="error-message">{formik.errors.username}</div> : null}



            {/* Email */}
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? <div className="error-message">{formik.errors.email}</div> : null}



            {/* Password */}
            <label htmlFor="password">Password</label>
            <input type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password ? <div className="error-message">{formik.errors.password}</div> : null}



            <button className="register-button center-50" type="submit">Register</button>
        </form>

    );
}

export default FormikRegistrationForm;