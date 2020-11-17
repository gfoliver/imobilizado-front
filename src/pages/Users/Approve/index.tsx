import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/Auth';

// import {  } from './styles';

const ApproveUsers: React.FC = () => {
    const { user } = useAuth();

    if (user.type !== "admin")
        return <Redirect to="/" />

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="users" />
                <div className="content">
                    <h1>
                        <b>Usuários</b> - Aprovações Pendentes
                    </h1>
                    <Table
                        columns={[
                            {title: "#", field: "id", width: "80px"},
                            {title: "Nome", field: "name"},
                            {title: "E-mail", field: "email"},
                            {title: "",width: "204px", render: () => (
                                <div className="buttons">
                                    <SmallButton>Aprovar</SmallButton>
                                    <SmallButton buttonStyle="secondary">Recusar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={[
                            {id: 1, name: "Teste 1", email: "teste@teste.com"},
                            {id: 2, name: "Teste 2", email: "teste@teste.com"},
                        ]}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default ApproveUsers;