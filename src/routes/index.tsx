import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Logout from '../components/Logout';
import UsersList from '../pages/Users/List';
import UsersForm from '../pages/Users/Form';
import ApproveUsers from '../pages/Users/Approve';
import AreasList from '../pages/Areas/List';
import AreasForm from '../pages/Areas/Form';
import UnitiesList from '../pages/Unities/List';
import UnitiesForm from '../pages/Unities/Form';
import ProductsForm from '../pages/Products/Form';
import ProductsList from '../pages/Products/List';
import Inventory from '../pages/Inventory';
import FinishInventory from '../pages/Inventory/Finish';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact isPrivate component={Home} />
                
                <Route path="/usuarios" exact isPrivate component={UsersList} />
                <Route path="/usuarios/salvar" isPrivate component={UsersForm} />
                <Route path="/usuarios/aprovar" isPrivate component={ApproveUsers} />
                
                <Route path="/areas" exact isPrivate component={AreasList} />
                <Route path="/areas/salvar" isPrivate component={AreasForm} />
                
                <Route path="/unidades" exact isPrivate component={UnitiesList} />
                <Route path="/unidades/salvar" exact isPrivate component={UnitiesForm} />

                <Route path="/imobilizados" exact isPrivate component={ProductsList} />
                <Route path="/imobilizados/salvar" exact isPrivate component={ProductsForm} />

                <Route path="/inventario" exact isPrivate component={Inventory} />
                <Route path="/inventario/salvar" isPrivate component={FinishInventory} />

                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />
                <Route path="/sair" component={Logout} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;