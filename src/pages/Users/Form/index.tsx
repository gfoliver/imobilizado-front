import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';
import { useToasts } from 'react-toast-notifications';
import { FormHandles } from '@unform/core';

interface IInitialData {
    name: string;
    email: string;
    type: string;
}

const UsersForm: React.FC = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<string | null>(null);
    const { user, token } = useAuth();
    const { addToast } = useToasts();
    const formRef = useRef<FormHandles>(null);
    const [type, setType] = useState<"admin" | "employee">("admin");
    const [initialData, setInitialData] = useState<IInitialData | undefined>(undefined);

    const fetchUserData = useCallback((id: string) => {
        api(token)
            .get('/user/' + id)
            .then(response => {
                if (response.data.status) {
                    setInitialData(response.data.data);
                    if (response.data.data.type === "employee")
                        setType("employee");
                }
            })
            .catch(err => console.log(err));
    }, [token]);
    
    useEffect(() => {
        const query = parse(location.search.split('?')[1]);
        if (query.id) {
            setEdit(true);
            setId(String(query.id));
            fetchUserData(String(query.id));
        }
    }, [location, fetchUserData]);

    const handleSubmit = useCallback(data => {
        api(token).post('/user', data).then(response => {
            addToast('Usuário adicionado com sucesso!', {
                appearance: 'success'
            });
        }).catch(err => {
            addToast('Erro ao adicionar o usuário, tente novamente mais tarde.', {
                appearance: 'error'
            });
        }).finally(() => {
            formRef.current?.reset();
        });
    }, [token, addToast]);

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
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <div className="grid">
                                <div className="item">
                                    <label htmlFor="save-user-name">Nome</label>
                                    <Input name="name" id="save-user-name" required defaultValue={initialData?.name} />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-user-email">E-mail</label>
                                    <Input type="email" name="email" id="save-user-email" required defaultValue={initialData?.email} />
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
                                        <input type="radio" name="save-user-type" id="save-user-type-admin" value="admin" checked={type === "admin"} onChange={() => setType("admin")} />
                                        <label htmlFor="save-user-type-admin">
                                            Admin
                                        </label>
                                        <input type="radio" name="save-user-type" id="save-user-type-employee" value="employee" checked={type === "employee"} onChange={() => setType("employee")} />
                                        <label htmlFor="save-user-type-employee">
                                            Profissional
                                        </label>
                                    </div>
                                </div>
                                <Button type="submit">Salvar</Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </main>
        </>
    );
}
export default UsersForm;