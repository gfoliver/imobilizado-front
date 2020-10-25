import React from 'react';
import { Link } from 'react-router-dom';
import { FiBox, FiLayers, FiDollarSign, FiUsers } from "react-icons/fi";

import { Container, Nav } from './styles';

const Sidebar: React.FC = () => {
    return (
        <Container>
            <Nav>
                <li>
                    <Link to="/usuarios">
                        <FiUsers />
                        Usuarios
                    </Link>
                </li>
                <li>
                    <Link to="/imobilizados">
                        <FiBox />
                        Imobilizados
                    </Link>
                </li>
                <li>
                    <Link to="/areas">
                        <FiLayers />
                        Areas
                    </Link>
                </li>
                <li>
                    <Link to="/patrimonio">
                        <FiDollarSign />
                        Patrimônio
                    </Link>
                </li>
            </Nav>
        </Container>
    );
}
export default Sidebar;