import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Logout from '../components/Logout';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact isPrivate component={Home}></Route>

                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/sair" component={Logout} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;