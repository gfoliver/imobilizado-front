import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import { Container, Content, Image } from './styles';

interface ProductItemProps {
    image?: string;
    title: string;
    area: string;
    amount: number;
    value: number;
}

const ProductItem: React.FC<ProductItemProps> = (props) => {
    return (
        <Container>
            {props.image && <Image src={props.image} />}
            <Content>
                <div className="title">{props.title}</div>
                <div className="description">
                    <div className="item">Area: {props.area}</div>
                    <div className="item">Quantidade: {props.amount}</div>
                    <div className="item">
                        Valor: R$ {props.value.toLocaleString('pt-br', {currency: 'BRL'})}
                    </div>
                </div>
                <div className="buttons">
                    <button className="primary">
                        <FiEdit />
                    </button>
                    <button className="secondary">
                        <FiTrash2 />
                    </button>
                </div>
            </Content>
        </Container>
    );
}
export default ProductItem;