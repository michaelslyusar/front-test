import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ LoginPage } exact= { true }/>    
                <Route path="/register" component={ RegistrationPage }/>    
                <Route component={ NotFoundPage }/>    
            </Switch>
        </BrowserRouter>
    </div>
);


export default AppRouter;

