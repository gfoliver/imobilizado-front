import React from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';

// import {  } from './styles';

const AreasList: React.FC = () => {
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
                            {title: "Unidade", field: "unity"},
                            {title: "",width: "204px", render: () => (
                                <div className="buttons">
                                    <SmallButton>Editar</SmallButton>
                                    <SmallButton buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={[
                            {id: 1, name: "Teste 1", unity: "Matriz"},
                            {id: 2, name: "Teste 2", unity: "Porto Alegre"},
                        ]}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default AreasList;