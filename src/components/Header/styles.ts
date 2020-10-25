import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 24px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.cards};
    border-bottom: 1px solid ${props => props.theme.colors.cardBorder};

    .logo {
        font-size: 24px;
        font-weight: bold;
        font-family: 'Roboto Condensed';
    }

    nav {
        display: flex;
        align-items: center;
        list-style: none;
        padding: 0;

        li {
            & + li {
                margin-left: 32px;
            }

            a {
                text-decoration: none;
                color: ${props => props.theme.colors.textLight};
                font-size: 18px;
            }
        }
    }

    .user {
        display: flex;
        align-items: center;

        svg {
            stroke: ${props => props.theme.colors.text};
            width: 24px;
            height: 24px;
        }

        .name {
            margin-left: 16px;
            margin-right: 40px;
            font-size: 16px;
        }

        a {
            text-decoration: none;

            svg {
                stroke: ${props => props.theme.colors.secondary};
            }
        }
    }

    @media (max-width: 480px) {
        nav {
            display: none;
        }
    }
`;