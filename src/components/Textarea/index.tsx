import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
};

const Textarea: React.FC<TextareaProps> = ({ name, cols, ...rest }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            path: 'value',
            ref: textareaRef.current
        })
    }, [registerField, fieldName]);

    return (
        <Container hasError={!!error}>
            <textarea 
                ref={textareaRef} 
                defaultValue={defaultValue} 
                onFocus={clearError}
                cols={cols ? cols : 30}
                {...rest} 
            />
            {error && (
                <FiAlertCircle title={error} />
            )}
        </Container>
    );
}
export default Textarea;