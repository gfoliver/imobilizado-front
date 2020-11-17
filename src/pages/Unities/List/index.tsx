import React from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import SmallButton from '../../../components/SmallButton';
import Table from '../../../components/Table';

// import {  } from './styles';

const UnitiesList: React.FC = () => {
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
                            {title: "",width: "204px", render: () => (
                                <div className="buttons">
                                    <SmallButton>Editar</SmallButton>
                                    <SmallButton buttonStyle="secondary">Deletar</SmallButton>
                                </div>
                            )},
                        ]}
                        data={[
                            {id: 1, name: "Teste 1"},
                            {id: 2, name: "Teste 2"},
                        ]}
                    ></Table>
                </div>
            </main>
        </>
    );
}
export default UnitiesList;