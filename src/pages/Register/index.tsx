import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { Container, Card, SuccessCard } from './styles';
import { Loader } from '../../styles/Global';

const Register: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToasts();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const history = useHistory();

    const handleSubmit = useCallback(async (data) => {
        formRef.current?.setErrors({});
        setIsLoading(true);

        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Endereço de e-mail inválido'),
                password: Yup.string().required('Senha obrigatória').min(8, 'A senha deve ter no mínimo 8 caracteres'),
                password_confimation: Yup.string().required('Confirmação de senha obrigatória').equals([data.password], 'As senhas devem ser iguais'),
            });
            
            await schema.validate(data, {
                abortEarly: false
            });
            
            const response = await api().post('/user', {...data, type:"employee"});

            if (response.data.status)
                setSuccess(true);
        }
        catch(err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);

                formRef.current?.setErrors(errors);
            }
            else {
                addToast('Erro ao efetuar o cadastro', {
                    appearance: 'error',
                });
            }
        }
        finally {
            setIsLoading(false);
        }
    }, [addToast, setIsLoading, setSuccess]);

    const navigateToLogin = useCallback(() => {
        history.push('/login');
    }, [history]);

    return (
        <>
            <Header />
            <Container>
                {success ? (
                    <SuccessCard>
                        <div className="pre-title">Sistema de Inventário de Imobilizado</div>
                        <h1 className="title">Cadastro efetuado com sucesso!</h1>
                        <p>
                            O seu cadastro foi efetuado com sucesso, mas você ainda precisa ser 
                            aprovado por um administrador para poder acessar o sistema. 
                        </p>
                        <Button onClick={navigateToLogin}>Fazer Login</Button>
                    </SuccessCard>
                ) : (
                    <Card>
                        <div className="pre-title">Sistema de Inventário de Imobilizado</div>
                        <h1 className="title">Cadastre-se no sistema</h1>
                        <Form onSubmit={handleSubmit} ref={formRef}>
                            <div className="input-group">
                                <label htmlFor="register-name">Nome</label>
                                <Input name="name" id="register-name" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="register-email">E-mail</label>
                                <Input name="email" id="register-email" type="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="register-password">Senha</label>
                                <Input name="password" id="register-password" type="password" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="register-password-confirmation">Confirmar senha</label>
                                <Input name="password_confimation" id="register-password-confirmation" type="password" required />
                            </div>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? <Loader /> : 'Cadastrar'}
                            </Button>
                        </Form>
                        <span>Já possui uma conta? <Link to="/login">faça login</Link></span>
                    </Card>
                )}
            </Container>
        </>
    );
}
export default Register;