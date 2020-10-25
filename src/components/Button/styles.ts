import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    width: 100%;
    display: block;
    padding: 14px 24px;
    text-align: center;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-size: 18px;
    border: none;
    border-radius: 4px;
    transition: all .3s ease;
    cursor: pointer;

    &:hover, 
    &:focus, 
    &:active {
        background-color: ${props => shade(0.25, props.theme.colors.primary)};
    }

    &:disabled {
        opacity: .7;
    }
`;