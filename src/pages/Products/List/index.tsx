import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header';
import ProductItem from '../../../components/ProductItem';
import Sidebar from '../../../components/Sidebar';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

import { ProductsWrapper } from './styles';

interface IProduct {
    id: number;
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
                        {products.map(({ id, amount, name, area_id, value, image }) => (
                            <ProductItem 
                                key={id}
                                amount={amount} 
                                area={String(area_id)} 
                                title={name}
                                value={value}
                                image={image}
                            />
                        ))}
                    </ProductsWrapper>
                </div>
            </main>
        </>
    );
}
export default ProductsList;