import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import api from '../../../services/api';
import { useAuth } from '../../../context/Auth';
import { useToasts } from 'react-toast-notifications';
import { FormHandles } from '@unform/core';

interface IUnity {
    id: number;
    name: string;
}

const AreasForm: React.FC = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<string | null>(null);
    const { token } = useAuth();
    const { addToast } = useToasts();
    const [unities, setUnities] = useState<IUnity[]>([]);
    const formRef = useRef<FormHandles>(null);

    useEffect(() => {
        const query = parse(location.search.split('?')[1]);
        if (query.id) {
            setEdit(true);
            setId(String(query.id));
        }
    }, [location]);

    useEffect(() => {
        api(token)
            .get('/unity')
            .then(response => setUnities(response.data.data.map((unity: IUnity) => ({value: unity.id, label: unity.name}))))
            .catch(error => console.log(error));
    }, [token]);

    const handleSubmit = useCallback(data => {
        api(token)
            .post('/area', data)
            .then(response => {
                addToast('Area adicionada com sucesso!', {appearance: 'success'})
            })
            .catch(error => {
                addToast('Erro ao adicionar a area, tente novamente mais tarde.', {appearance: 'error'});
            })
            .finally(() => formRef.current?.reset());
    }, [token, addToast]);

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="areas" />
                <div className="content">
                    <h1>
                        <b>Areas</b> - {edit ? `Editar #${id}` : 'Adicionar Nova'}
                    </h1>
                    <Card>
                        <Form ref={formRef} onSubmit={handleSubmit}>
                            <div className="item">
                                <label htmlFor="save-area-name">Nome</label>
                                <Input name="name" id="save-area-name" required />
                            </div>
                            <div className="item">
                                <label htmlFor="save-area-unity">Unidade</label>
                                <Select name="unity_id" id="save-area-unity" required options={unities} />
                            </div>
                        
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    </Card>
                </div>
            </main>
        </>
    );
}
export default AreasForm;