import React from 'react';
import { Link } from 'react-router-dom';
import { FiBox, FiLayers, FiMapPin, FiUsers } from "react-icons/fi";

import { Container, Nav } from './styles';
import { useAuth } from '../../context/Auth';

const Sidebar: React.FC = () => {
    const { user } = useAuth();

    return (
        <Container>
            <Nav>
                { user.type === "admin" && (
                    <li>
                        <Link to="/usuarios">
                            <FiUsers />
                            Usuarios
                        </Link>
                    </li>
                ) }
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
                    <Link to="/unidades">
                        <FiMapPin />
                        Unidades
                    </Link>
                </li>
            </Nav>
        </Container>
    );
}
export default Sidebar;