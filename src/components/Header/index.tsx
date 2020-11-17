import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../context/Auth';

import { Container } from './styles';
import SmallButton from '../SmallButton';

const Header: React.FC = () => {
    const { user } = useAuth();

    return (
        <Container>
            <Link to="/" className="logo">imobilizado</Link>
            {user ? (
                <div className="user">
                    <SmallButton>Realizar Inventário</SmallButton>
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