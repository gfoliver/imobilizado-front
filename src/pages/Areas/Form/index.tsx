import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const AreasForm: React.FC = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<string | null>(null);

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
                        <Form onSubmit={handleSubmit}>
                            <div className="item">
                                <label htmlFor="save-area-name">Nome</label>
                                <Input name="name" id="save-area-name" required />
                            </div>
                            <div className="item">
                                <label htmlFor="save-area-unity">Unidade</label>
                                <Select name="unity" id="save-area-unity" required options={[
                                    {value: '1', label: 'Teste'},
                                    {value: '2', label: 'Teste 2'},
                                    {value: '3', label: 'Teste 3'},
                                ]} />
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