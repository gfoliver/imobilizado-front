import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-toast-notifications';

import theme from '../styles/theme';
import Global from '../styles/Global';

import { AuthProvider } from './Auth';

const AppProvider: React.FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <ToastProvider autoDismiss>
                    <Global />
                    { children }
                </ToastProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default AppProvider;