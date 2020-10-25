import React, { useEffect } from 'react';

import { useAuth } from '../../context/Auth';

const Logout: React.FC = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, [logout]);

    return null;
}
export default Logout;