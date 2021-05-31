import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';

const LoginPage = () => {
    return (
        <div>
            <Header />
            <div className="center-25" >
                <LoginForm />
            </div>
        </div>

    )
}

export default LoginPage;