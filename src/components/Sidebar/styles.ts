import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.cards};
    border-right: 1px solid ${props => props.theme.colors.cardBorder};
`;

export const Nav = styled.nav`
    list-style: none;
    display: block;

    li {
        padding: 24px 32px;
        border-bottom: 1px solid ${props => props.theme.colors.cardBorder};

        a {
            text-decoration: none;
            color: ${props => props.theme.colors.textLight};
            display: flex;
            align-items: center;
            
            svg {
                width: 24px;
                height: 24px;
                margin-right: 16px;
                outline: ${props => props.theme.colors.textLight};
            }
        }
    }
`;