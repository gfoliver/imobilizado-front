import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
};

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current
        })
    }, [registerField, fieldName]);

    return (
        <Container hasError={!!error}>
            <input 
                ref={inputRef} 
                defaultValue={defaultValue} 
                onFocus={clearError}
                {...rest} 
            />
            {error && (
                <FiAlertCircle title={error} />
            )}
        </Container>
    );
}
export default Input;