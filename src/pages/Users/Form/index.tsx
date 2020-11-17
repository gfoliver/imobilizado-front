import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useAuth } from '../../../context/Auth';

const UsersForm: React.FC = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<string | null>(null);
    const { user } = useAuth();

    useEffect(() => {
        const query = parse(location.search.split('?')[1]);
        if (query.id) {
            setEdit(true);
            setId(String(query.id));
        }
    }, [location]);

    const handleSubmit = useCallback(data => {
        console.log(data);
    }, []);

    if (user.type !== "admin")
        return <Redirect to="/" />

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="users" />
                <div className="content">
                    <h1>
                        <b>Usuários</b> - {edit ? `Editar #${id}` : 'Adicionar Novo'}
                    </h1>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <div className="grid">
                                <div className="item">
                                    <label htmlFor="save-user-name">Nome</label>
                                    <Input name="name" id="save-user-name" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-user-email">E-mail</label>
                                    <Input type="email" name="email" id="save-user-email" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-user-password">Senha</label>
                                    <Input type="password" name="password" id="save-user-password" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-user-password-confirmation">Confirmar senha</label>
                                    <Input type="password" name="password-confirmation" id="save-user-password-confirmation" required />
                                </div>
                                <div className="item">
                                    <label>Tipo de Usuário</label>
                                    <div className="radio-wrapper">
                                        <input type="radio" name="save-user-type" id="save-user-type-admin" value="admin" defaultChecked />
                                        <label htmlFor="save-user-type-admin">
                                            Admin
                                        </label>
                                        <input type="radio" name="save-user-type" id="save-user-type-employee" value="employee" />
                                        <label htmlFor="save-user-type-employee">
                                            Profissional
                                        </label>
                                    </div>
                                </div>
                                <Button type="submit">Cadastrar</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </main>
        </>
    );
}
export default UsersForm;