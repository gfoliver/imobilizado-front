import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';
import { useAuth } from '../../../context/Auth';
import api from '../../../services/api';

interface IArea {
    id: number;
    name: string;
    unity_id: number;
}

const AreasList: React.FC = () => {
    const [areas, setAreas] = useState<IArea[]>([]);
    const { token } = useAuth();

    useEffect(() => {
        api(token)
            .get('/area')
            .then(response => setAreas(response.data.data))
            .catch(err => console.log(err));
    }, [token]);

    const deleteArea = useCallback((id) => {
        const canDelete = window.confirm('Deseja deletar a área #' + id + '?');

        if (!canDelete)
            return;

        api(token).delete('/area/' + id).then(() => {
            setAreas(areas => areas.filter(area => area.id !== id));
        }).catch(err => console.log(err));
    }, [token]);

    return (
        <>
            <Header />
            <main>
                <Sidebar activeTab="areas" />
                <div className="content">
                    <h1>
                        <b>Areas</b> - Listagem
                    </h1>
                    <Table
                        columns={[
                            {title: "#", field: "id", width: "80px"},
                            {title: "Nome", field: "name"},
                            {title: "Unidade", field: "unity_id"},
                            {title: "",width: "204px", render: (item) => (
                                <div className="buttons">
                                    <SmallButton>Editar</SmallButton>
                                    <SmallButton onClick={() => deleteArea(item.id)} buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={areas}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default AreasList;