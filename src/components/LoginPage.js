import React from 'react';
import LoginForm from './LoginForm';
import Header from './Header';

const LoginPage = (props) => {
    console.log(props);
    return (
        <div className="login-page">
            <Header />
            <div className="center-25" >
                <LoginForm props={props}/>
            </div>
        </div>

    )
}

export default LoginPage;