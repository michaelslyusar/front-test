import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ProtectedRoute from '../components/ProtectedRoute';

import PostsPage from '../components/PostsPage';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/register" component={RegistrationPage} />
                
                {/* {localStorage.getItem('token')? <Route path="/posts"><Posts /></Route>: null} */}
                <ProtectedRoute 
                    exact
                    path="/posts"
                    component={ PostsPage }
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </div>
);


export default AppRouter;

