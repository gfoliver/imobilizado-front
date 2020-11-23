import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface LoginDTO {
    email: string;
    password: string;
}

interface IAuthContext {
    login({ email, password }: LoginDTO): Promise<void>;
    logout(): void;
    user: {
        name: string;
        email: string;
        type: "admin" | "employee";
    };
    token: string;
}

interface LoginResponse {
    data: {
        token: string;
        user: {
            name: string;
            email: string;
            type: "admin" | "employee";
        };
    }
}

interface AuthData {
    token: string;
    user: {
        name: string;
        email: string;
        type: "admin" | "employee";
    };
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthData>(() => {
        const token = localStorage.getItem('@imobilizado:token');
        const user = localStorage.getItem('@imobilizado:user');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthData;
    })


    const login = useCallback(async ({ email, password }: LoginDTO) => {
        const response = await api().post<LoginResponse>('/user/login', { email, password });
        
        const { token, user } = response.data.data;

        setData({ token, user });

        localStorage.setItem('@imobilizado:token', token);
        localStorage.setItem('@imobilizado:user', JSON.stringify(user));
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem('@imobilizado:token');
        localStorage.removeItem('@imobilizado:user');

        setData({} as AuthData);
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, user: data.user, token: data.token }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('useAuth must be used inside an AuthProvider');

    return context;
}

export { AuthProvider, useAuth };