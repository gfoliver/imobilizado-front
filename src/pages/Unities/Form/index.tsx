import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const UnitiesForm: React.FC = () => {
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
                <Sidebar activeTab="unities" />
                <div className="content">
                    <h1>
                        <b>Unidades</b> - {edit ? `Editar #${id}` : 'Adicionar Nova'}
                    </h1>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <div className="item">
                                <label htmlFor="save-unity-name">Nome</label>
                                <Input name="name" id="save-unity-name" required />
                            </div>
                        
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    </Card>
                </div>
            </main>
        </>
    );
}
export default UnitiesForm;