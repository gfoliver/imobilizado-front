import styled, { css } from 'styled-components';
import Btn from '../Button';
import { ButtonHTMLAttributes } from 'react';
import { shade } from 'polished';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle?: "default" | "secondary";
}

export const Button = styled(Btn)<BtnProps>`
    padding: 8px 24px;
    font-size: 16px;
    width: fit-content;

    ${props => props.buttonStyle && props.buttonStyle === "secondary" && css`
        background-color: ${props.theme.colors.secondary};

        &:hover, 
        &:focus, 
        &:active {
            background-color: ${shade(.25, props.theme.colors.secondary)};
        }
    `};
`;