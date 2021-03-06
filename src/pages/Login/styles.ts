import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    min-height: calc(100vh - 78px);
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    width: 420px;
    height: auto;
    padding: 32px;
    background: ${props => props.theme.colors.cards};
    border: 1px solid ${props => props.theme.colors.cardBorder};
    border-radius: 6px;
    max-width: calc(100vw - 32px);
    animation: reveal .5s ease forwards;
    transition: all .5s ease;

    @keyframes reveal {
        0% {
            transform: translateY(-32px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .pre-title {
        font-size: 14px;
        color: ${props => props.theme.colors.textLight};
        margin-bottom: 8px;
        text-align: center;
    }

    .title {
        font-size: 24px;
        margin-bottom: 40px;
        text-align: center;
    }

    span {
        font-size: 14px;
        color: ${props => props.theme.colors.textLight};

        a {
            text-decoration: underline;
            color: ${props => props.theme.colors.text};
            font-weight: 500;
        }
    }

    form {
        button {
            margin-top: 24px;
        }

        margin-bottom: 32px;
    }
`;