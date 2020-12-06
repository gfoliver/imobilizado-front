import React, { useCallback, useState } from 'react';
import { FiTrash2, FiEdit, FiCheck } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Container, Content, Image, ConfirmContainer } from './styles';

interface ProductItemProps {
    code: string;
    image?: string;
    title: string;
    area: string;
    amount: number;
    value: number;
    onDelete?: () => void;
    hideButtons?: boolean;
    confirm?: boolean;
    onSelect: (value: boolean) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ onSelect, ...props}) => {
    const history = useHistory();
    const [checked, setChecked] = useState(false);

    const navigateToEdit = useCallback(() => {
        history.push(`/imobilizados/salvar/?code=${props.code}`);
    }, [history, props.code]);

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
                {!props.hideButtons && (
                    <div className="buttons">
                        <button className="primary">
                            <FiEdit onClick={navigateToEdit} />
                        </button>
                        <button className="secondary">
                            <FiTrash2 onClick={props.onDelete} />
                        </button>
                    </div>
                )}
                {props.confirm && (
                    <ConfirmContainer>
                        <div className="text">Confirmar imobilizado</div>
                        <label className="checkbox-wrapper">
                            <input 
                                type="checkbox" 
                                id={`product-confirm-${props.code}`} 
                                checked={checked} 
                                onChange={e => {
                                    setChecked(e.target.checked);
                                    onSelect(e.target.checked);
                                }} 
                            />
                            <label htmlFor={`product-confirm-${props.code}`} className="custom-checkbox">
                                <FiCheck size={16} color="#fff" />
                            </label>
                        </label>
                    </ConfirmContainer>
                )}
            </Content>
        </Container>
    );
}
export default ProductItem;