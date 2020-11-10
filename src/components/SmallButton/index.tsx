import React, {ButtonHTMLAttributes} from 'react';

import { Button } from './styles';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle?: "default" | "secondary";
}

const SmallButton: React.FC<BtnProps> = ({ children, ...rest }) => {
    return (
        <Button {...rest}>{children}</Button>
    );
}
export default SmallButton;