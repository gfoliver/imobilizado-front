import React from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';

// import {  } from './styles';

interface IUserListItem extends Object {
    type: string;
    active: boolean;
}

const UsersList: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
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
                            {title: "",width: "204px", render: () => (
                                <div className="buttons">
                                    <SmallButton>Editar</SmallButton>
                                    <SmallButton buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={[
                            {id: 1, name: "Teste 1", email: "teste@teste.com", type: "employee", active: false},
                            {id: 2, name: "Teste 2", email: "teste@teste.com", type: "admin", active: true},
                        ]}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default UsersList;