import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiBox, FiLayers, FiMapPin, FiUsers } from "react-icons/fi";

import { Container, Nav, SidebarItem } from './styles';
import { useAuth } from '../../context/Auth';

interface SidebarProps {
    activeTab?: "users" | "products" | "areas" | "unities";
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
    const { user } = useAuth();
    const location = useLocation();

    return (
        <Container>
            <Nav>
                { user.type === "admin" && (
                    <>
                        <SidebarItem active={activeTab === "users"}>
                            <Link to="/usuarios">
                                <FiUsers />
                                Usuarios
                            </Link>
                        </SidebarItem>
                        {activeTab && activeTab === "users" && (
                            <ul>
                                <li>
                                    <Link to="/usuarios" className={location.pathname === "/usuarios" ? 'active' : ''}>
                                        Listagem
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/usuarios/salvar" className={location.pathname === "/usuarios/salvar" ? 'active' : ''}>
                                        Adicionar Novo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/usuarios/aprovar" className={location.pathname === "/usuarios/aprovar" ? 'active' : ''}>
                                        Aprovações Pendentes
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </>
                ) }
                <SidebarItem active={activeTab === "products"}>
                    <Link to="/imobilizados">
                        <FiBox />
                        Imobilizados
                    </Link>
                </SidebarItem>
                {activeTab && activeTab === "products" && (
                    <ul>
                        <li>
                            <Link to="/imobilizados" className={location.pathname === "/imobilizados" ? 'active' : ''}>
                                Listagem
                            </Link>
                        </li>
                        <li>
                            <Link to="/imobilizados/salvar" className={location.pathname === "/imobilizados/salvar" ? 'active' : ''}>
                                Adicionar Novo
                            </Link>
                        </li>
                    </ul>
                )}
                <SidebarItem active={activeTab === "areas"}>
                    <Link to="/areas">
                        <FiLayers />
                        Areas
                    </Link>
                </SidebarItem>
                {activeTab && activeTab === "areas" && (
                    <ul>
                        <li>
                            <Link to="/areas" className={location.pathname === "/areas" ? 'active' : ''}>
                                Listagem
                            </Link>
                        </li>
                        <li>
                            <Link to="/areas/salvar" className={location.pathname === "/areas/salvar" ? 'active' : ''}>
                                Adicionar Nova
                            </Link>
                        </li>
                    </ul>
                )}
                <SidebarItem active={activeTab === "unities"}>
                    <Link to="/unidades">
                        <FiMapPin />
                        Unidades
                    </Link>
                </SidebarItem>
                {activeTab && activeTab === "unities" && (
                    <ul>
                        <li>
                            <Link to="/unidades" className={location.pathname === "/unidades" ? 'active' : ''}>
                                Listagem
                            </Link>
                        </li>
                        <li>
                            <Link to="/unidades/salvar" className={location.pathname === "/unidades/salvar" ? 'active' : ''}>
                                Adicionar Nova
                            </Link>
                        </li>
                    </ul>
                )}
            </Nav>
        </Container>
    );
}
export default Sidebar;