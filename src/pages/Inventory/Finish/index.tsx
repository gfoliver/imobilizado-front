import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import api from '../../../services/api';
import { useAuth } from '../../../context/Auth';
import { useToasts } from 'react-toast-notifications';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface IFormData {
    name: string;
    cpf: string;
}

const Finish: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { token } = useAuth();
    const { addToast } = useToasts();

    const handleSubmit = useCallback(async (data: IFormData) => {
        const schema = Yup.object().shape({
            name: Yup.string().required('O nome é obrigatório'),
            cpf: Yup.string().required('O cpf é obrigatório')
        });

        try {
            await schema.validate(data, {
                abortEarly: false
            });
    
            api(token).post('/yearReport', data);

            addToast('Levantamento enviado com sucesso!', {
                appearance: 'success'
            });
        }
        catch(e) {
            addToast('Erro ao enviar o levantamento patrimonial.', {
                appearance: 'error'
            });
        }
    }, [token, addToast]);

    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div className="content">
                    <h1><b>Levantamento patrimonial anual</b></h1>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <div className="grid">
                            <div className="item">
                                <label htmlFor="finish-name">Nome</label>
                                <Input name="name" id="finish-name" />
                            </div>
                            <div className="item">
                                <label htmlFor="finish-cpf">CPF</label>
                                <Input name="cpf" id="finish-cpf" />
                            </div>
                        </div>
                        <Button type="submit" style={{marginTop: 24}}>Enviar</Button>
                    </Form>
                </div>
            </main>
        </>
    );
}
export default Finish;