import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import ProductItem from '../../components/ProductItem';

import { ProductsWrapper } from './styles';
import api from '../../services/api';
import { useAuth } from '../../context/Auth';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

interface IProduct {
    code: string;
    image?: string;
    name: string;
    area_id: number;
    amount: number;
    value: number;
    selected: boolean;
}

interface IReport {
    name: string;
    cpf: string;
    created_at: string;
}

const Inventory: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const { token } = useAuth();
    const history = useHistory();
    const [report, setReport] = useState<IReport | null>(null);

    useEffect(() => {
        const year = new Date().getFullYear();

        api(token).get(`/yearReport/${year}`).then(res => {
            if (res.data.status && res.data.data)
                setReport(res.data.data);
        }).catch(e => console.log(e));
    }, [token]);

    useEffect(() => {
        api(token).get('/product').then(res => {
            if (res.data.status)
                setProducts(res.data.data.products.map((prod: IProduct) => ({...prod, selected: false})));            
        }).catch(e => console.log(e));
    }, [token]);

    const finish = useCallback(() => {
        const notConfirmed = products.find(prod => !prod.selected);

        if (notConfirmed)
            return;

        history.push('/inventario/salvar');
    }, [history, products]);

    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div className="content">
                    <h1>
                        <b>Levantamento patrimonial anual</b>
                    </h1>
                    {report ? (
                        <div className="report">
                            <p>
                                Levantamento patrimonial anual realizado por {report.name}, cpf {report.cpf},
                                no dia {new Date(report.created_at).toLocaleDateString('pt-br')}
                            </p>
                        </div>
                    ) : (
                        <>
                            <ProductsWrapper>
                                {products.map(({ code, amount, name, area_id, value, image }) => (
                                    <ProductItem 
                                        key={code}
                                        code={code}
                                        amount={amount} 
                                        area={String(area_id)} 
                                        title={name}
                                        value={value}
                                        image={image}
                                        hideButtons
                                        confirm
                                        onSelect={(value: boolean) => {
                                            setProducts(products => products.map(
                                                item => item.code === code ? ({...item, selected: value}) : item)
                                            )
                                        }}
                                    />
                                ))}
                            </ProductsWrapper>
                            <Button onClick={finish}>Finalizar Inventário</Button>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}
export default Inventory;