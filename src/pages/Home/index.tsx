import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div className="content">
                    <h2>Sistema de Inventário de Imobilizado.</h2>
                </div>
            </main>
        </>
    );
}
export default Home;