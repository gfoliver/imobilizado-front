import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../context/Auth';

import { Container } from './styles';

const Header: React.FC = () => {
    const { user } = useAuth();

    return (
        <Container>
            <div className="logo">imobilizado</div>
            {user ? (
                <div className="user">
                    <FiUser />
                    <div className="name">{user.name}</div>
                    <Link to="/sair">
                        <FiLogOut />
                    </Link>
                </div>
            ) : (
                <nav>
                    <li>
                        <Link to="/login">Faça Login</Link>
                    </li>
                    <li>
                        <Link to="/cadastro">Cadastre-se</Link>
                    </li>
                </nav>
            )}
        </Container>
    );
}
export default Header;