import React, { useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

interface IUser {
    id: number;
    name: string;
    email: string;
}

const ApproveUsers: React.FC = () => {
    const { user, token } = useAuth();
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUsers = useCallback(() => {
        api(token).get('/user/pending').then(response => {
            if (response.data.status)
                setUsers(response.data.data);
        }).catch(e => console.log(e));
    }, [token]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const approve = useCallback((id: number) => {
        api(token).post('/user/approve', { id }).finally(() => fetchUsers());
    }, [token, fetchUsers]);
    
    const deny = useCallback((id: number) => {
        api(token).delete(`/user/${id}`).finally(() => fetchUsers());
    }, [token, fetchUsers]);

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
                            {title: "",width: "204px", render: (item) => (
                                <div className="buttons">
                                    <SmallButton onClick={() => approve(item.id)}>Aprovar</SmallButton>
                                    <SmallButton onClick={() => deny(item.id)} buttonStyle="secondary">Recusar</SmallButton>
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
export default ApproveUsers;