import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

// import {  } from './styles';

interface IUserListItem extends Object {
    type: string;
    active: boolean;
    id: number;
}

const UsersList: React.FC = () => {
    const { user, token } = useAuth();
    const [users, setUsers] = useState<IUserListItem[]>([]);
    const history = useHistory();

    useEffect(() => {
        api(token).get('/user').then(response => {
            setUsers(response.data.data);
        }).catch(err => console.log(err));
    }, [token]);

    if (user.type !== "admin")
        return <Redirect to="/" />

    const deleteUser = (id: number) => {
        const canDelete = window.confirm('Deseja deletar o usuário #' + id + '?');

        if (!canDelete)
            return;

        api(token).delete('/user/' + id).then(() => {
            setUsers(users.filter(user => user.id !== id));
        }).catch(e => console.log(e));
    }

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="users" />
                <div className="content">
                    <h1>
                        <b>Usuários</b> - Listagem
                    </h1>
                    <Table
                        columns={[
                            {title: "#", field: "id", width: "80px"},
                            {title: "Nome", field: "name"},
                            {title: "E-mail", field: "email"},
                            {title: "Tipo", field: "type", render: (item: IUserListItem) => item.type === "admin" ? "Admin" : "Profissional", width: "150px"},
                            {title: "Ativo", field: "active", render: (item: IUserListItem) => item.active ? "Ativo" : "Inativo", width: "150px"},
                            {title: "",width: "204px", render: (item: IUserListItem) => (
                                <div className="buttons">
                                    <SmallButton onClick={() => history.push('/usuarios/salvar?id=' + item.id)}>Editar</SmallButton>
                                    <SmallButton onClick={() => deleteUser(item.id)} buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={users}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default UsersList;