import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../../components/Header';
import ProductItem from '../../../components/ProductItem';
import Sidebar from '../../../components/Sidebar';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

import { ProductsWrapper } from './styles';

interface IProduct {
    code: string;
    image?: string;
    name: string;
    area_id: number;
    amount: number;
    value: number;
}

const ProductsList: React.FC = () => {
    const { token } = useAuth();
    const [ products, setProducts ] = useState<IProduct[]>([]);

    useEffect(() => {
        api(token)
            .get('/product')
            .then(response => setProducts(response.data.data.products))
            .catch(err => console.log(err));
    }, [token]);

    const handleDelete = useCallback((code: string) => {
        const canDelete = window.confirm('Deseja deletar o imobilizado #' + code + '?');

        if (!canDelete)
            return;

        api(token).delete(`/product/delete/${code}`).then(() => setProducts(products => products.filter(p => p.code !== code)));
    }, [token]);

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="products" />
                <div className="content">
                    <h1>
                        <b>Imobilizados</b> - Listagem
                    </h1>
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
                                onDelete={() => handleDelete(code)}
                                onSelect={() => {}}
                            />
                        ))}
                    </ProductsWrapper>
                </div>
            </main>
        </>
    );
}
export default ProductsList;