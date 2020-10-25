import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <main>
                <Sidebar />
            </main>
        </Container>
    );
}
export default Home;