import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../context/Auth';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Card } from './styles';
import { Loader } from '../../styles/Global';

const Login: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { login } = useAuth();
    const { addToast } = useToasts();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = useCallback(async (data) => {
        formRef.current?.setErrors({});
        setIsLoading(true);

        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Endereço de e-mail inválido'),
                password: Yup.string().required('Senha obrigatória')
            });

            await schema.validate(data, {
                abortEarly: false
            });

            await login(data);
        }
        catch(err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }
            else {
                addToast('Erro ao efetuar o login', {
                    appearance: 'error',
                });
            }
        }
        finally {
            setIsLoading(false);
        }
    }, [addToast, login]);

    return (
        <>
            <Header />
            <Container>
                <Card>
                    <div className="pre-title">Sistema de Inventário de Imobilizado</div>
                    <h1 className="title">Faça Login na sua conta</h1>
                    <Form onSubmit={handleSubmit} ref={formRef}>
                        <div className="input-group">
                            <label htmlFor="login-email">E-mail</label>
                            <Input name="email" id="login-email" type="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="login-password">Senha</label>
                            <Input name="password" id="login-password" type="password" required />
                        </div>
                        <Button type="submit" disabled={isLoading}>
                            { isLoading ? <Loader /> : 'Entrar' }
                        </Button>
                    </Form>
                    <span>Não possui uma conta? <Link to="/cadastro">cadastre-se</Link></span>
                </Card>
            </Container>
        </>
    );
}
export default Login;