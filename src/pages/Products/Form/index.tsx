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
import Textarea from '../../../components/Textarea';
import ImagePicker from '../../../components/ImagePicker';

const ProductsForm: React.FC = () => {
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
                                    <Input name="value" id="save-product-value" required />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-area">Area</label>
                                    <Select name="area" id="save-product-area" options={[
                                        {value: '1', label: 'teste'},
                                        {value: '2', label: 'teste 2'},
                                        {value: '3', label: 'teste 3'},
                                    ]} />
                                </div>
                                <div className="item">
                                    <label htmlFor="save-product-description">Descrição</label>
                                    <Textarea name="description" id="save-product-description" required rows={9} />
                                </div>
                                <div className="item">
                                    <label>Imagem</label>
                                    <ImagePicker onFileUploaded={() => {}} />
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