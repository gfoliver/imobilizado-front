import styled, { css } from 'styled-components';

interface LinkProps {
    active?: boolean;
}

export const Container = styled.div`
    background: ${props => props.theme.colors.cards};
    border-right: 1px solid ${props => props.theme.colors.cardBorder};
`;

export const Nav = styled.nav`
    list-style: none;
    display: block;

    ul {
        padding: 24px 32px;
        background: ${props => props.theme.colors.cardLighter};
        list-style: none;

        li {
            a {
                text-decoration: none;
                color: ${props => props.theme.colors.textLight};

                &.active {
                    color: ${props => props.theme.colors.text};
                    font-weight: 500;
                }
            }

            & + li {
                margin-top: 16px;
            }
        }
    }
`;

export const SidebarItem = styled.li<LinkProps>`
    padding: 24px 32px;
    border-bottom: 1px solid ${props => props.theme.colors.cardBorder};
    position: relative;

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

    ${props => props.active && css`
        background: ${props.theme.colors.cardLighter};
        box-shadow: 0px 4px 7px rgba(0,0,0,0.15);
        font-weight: 500;
        
        a {
            color: ${props.theme.colors.text};

            svg {
                outline: ${props.theme.colors.text};
            }
        }
    `};
`;