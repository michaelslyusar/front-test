import React from 'react';
import FormikRegistrationForm from './FormikRegistrationForm';
import Header from './Header';


const RegistrationPage = () => {
    return (
        <div className="registration-page">
            <Header />
            <div className="container">

                <h1 className="title">Registration Form</h1>
                <FormikRegistrationForm />
            </div>
        </div>

    )
}

export default RegistrationPage;