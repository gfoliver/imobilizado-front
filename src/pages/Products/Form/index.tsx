import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'qs';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Card } from '../../../styles/Global';
import { Form } from '@unform/web';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import Textarea from '../../../components/Textarea';
import ImagePicker from '../../../components/ImagePicker';
import api from '../../../services/api';
import { useAuth } from '../../../context/Auth';
import { useToasts } from 'react-toast-notifications';

interface IArea {
    id: number;
    name: string;
}

const ProductsForm: React.FC = () => {
    const location = useLocation();
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const { token } = useAuth();
    const { addToast } = useToasts();
    const [areas, setAreas] = useState<IArea[]>([]);

    useEffect(() => {
        const query = parse(location.search.split('?')[1]);
        if (query.id) {
            setEdit(true);
            setId(String(query.id));
        }
    }, [location]);

    useEffect(() => {
        api(token)
            .get('/area')
            .then(response => setAreas(response.data.data))
            .catch(err => console.log(err));
    }, [token]);

    const mappedAreas = useMemo(() => {
        return areas.map(area => ({label: area.name, value: area.id}));
    }, [areas]);

    const handleSubmit = useCallback((data: Object) => {
        let formData = new FormData();
        
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }

        if (file)
            formData.append('image', file);
            
        formData.append('amount', "1");

        api(token)
            .post('/product', formData)
            .then(() => addToast('Imobilizado adicionado com sucesso!', {appearance: 'success'}))
            .catch(() => addToast('Erro ao adicionar o imobilizado.', {appearance: 'error'}));
    }, [file, addToast, token]);

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="products" />
                <div className="content">
                    <h1>
                        <b>Produtos</b> - {edit ? `Editar #${id}` : 'Adicionar Novo'}
                    </h1>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <div className="grid">
                                <div className="item">
                                    <label htmlFor="save-product-name">Nome</label>
                                    <Input name="name" id="save-product-name" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-code">Código de patrimônio</label>
                                    <Input name="code" id="save-product-code" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-value">Valor</label>
                                    <Input type="number" name="value" id="save-product-value" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-area">Area</label>
                                    <Select name="area_id" id="save-product-area" options={mappedAreas} />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-description">Descrição</label>
                                    <Textarea name="description" id="save-product-description" required rows={9} />
                                </div>
                                <div className="item">
                                    <label>Imagem</label>
                                    <ImagePicker onFileUploaded={(file) => setFile(file)} />
                                </div>
                            </div>
                        
                            <Button type="submit" style={{marginTop: 24}}>Cadastrar</Button>
                        </Form>
                    </Card>
                </div>
            </main>
        </>
    );
}
export default ProductsForm;