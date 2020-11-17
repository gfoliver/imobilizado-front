import styled, { css } from 'styled-components';

interface ContainerProps {
    hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
    border: 1px solid ${props => props.theme.colors.inputBorder};
    border-radius: 4px;
    padding: 16px 24px;
    width: 100%;
    background: ${props => props.theme.colors.cards};
    transition: all .3s ease;
    display: flex;
    align-items: center;

    &:focus-within {
        border-color: ${props =>props.theme.colors.primary};
    }

    textarea {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 16px;
        line-height: 1em;
        resize: none;
    }

    svg {
        margin-left: 8px;
        stroke: ${props => props.theme.colors.secondary};
    }

    ${props => props.hasError && css`
        border-color: ${props.theme.colors.secondary};
    `};
`;