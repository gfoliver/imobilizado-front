import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

interface IUnity {
    id: number;
    name: string;
}

const UnitiesList: React.FC = () => {
    const [unities, setUnities] = useState<IUnity[]>([]);
    const { token } = useAuth();

    useEffect(() => {
        api(token)
            .get('/unity')
            .then(response => setUnities(response.data.data))
            .catch(error => console.log(error));
    }, [token]);

    const deleteUnity = useCallback((id) => {
        const canDelete = window.confirm('Deseja deletar a unidade #' + id + '?');

        if (!canDelete)
            return;

        api(token).delete('/unity/' + id).then(() => {
            setUnities(unities => unities.filter(u => u.id !== id));
        }).catch(e => console.log(e));
    }, [token]);

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="unities" />
                <div className="content">
                    <h1>
                        <b>Unidades</b> - Listagem
                    </h1>
                    <Table
                        columns={[
                            {title: "#", field: "id", width: "80px"},
                            {title: "Nome", field: "name"},
                            {title: "",width: "204px", render: (item) => (
                                <div className="buttons">
                                    <SmallButton>Editar</SmallButton>
                                    <SmallButton onClick={() => deleteUnity(item.id)} buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={unities}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default UnitiesList;