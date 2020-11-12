import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Logout from '../components/Logout';
import UsersList from '../pages/Users/List';
import UsersForm from '../pages/Users/Form';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact isPrivate component={Home} />
                <Route path="/usuarios" exact isPrivate component={UsersList} />
                <Route path="/usuarios/salvar" isPrivate component={UsersForm} />

                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/sair" component={Logout} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;