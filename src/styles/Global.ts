import styled, { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};

        input, button, textarea {
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme.colors.text};

            &:active,
            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }

    h1, h2, h3, h3, h5, h6 {
        font-weight: 500;
    }

    .input-group {
        margin-bottom: 16px;
    }

    label {
        display: block;
        font-size: 14px;
        margin-bottom: 8px;
    }

    main {
        min-height: calc(100vh - 84px);
        display: grid;
        grid-template-columns: 240px 1fr;

        .content {
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: stretch;

            > h1 {
                font-weight: normal;
                color: ${props => props.theme.colors.textLight};
                font-size: 32px;
                margin-bottom: 1em;

                b {
                    font-weight: 500;
                    color: ${props => props.theme.colors.text};
                }
            }
        }
    }

    .MuiPopover-paper {
        background: ${props => props.theme.colors.cards} !important;
        color: ${props => props.theme.colors.text} !important;
    }

    form {
        >.item {
            margin-bottom: 24px;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 24px;
            align-items: flex-end;
        }

        label {
            font-size: 16px;
            margin-bottom: 8px;
        }
    }

    .radio-wrapper {
        display: flex;

        input {
            display: none;
        }

        label {
            margin: 0;
            width: 100%;
            padding: 16px 24px;
            background-color: rgba(255,255,255, .02);
            transition: all .3s ease;
            color: rgba(255,255,255, .5);
            font-size: 16px;
            text-align: center;
            cursor: pointer;
            
            &:first-of-type {
                border-radius: 4px 0px 0px 4px;
            }
            &:last-of-type {
                border-radius: 0px 4px 4px 0px;
            }
        }

        input:checked + label {
            background-color: #4F4F4F;
            color: #fff;
        }
    }
`;

export const Loader = styled.div`
    width: 1.25em;
    height: 1.25em;
    border-radius: 100%;
    border: 3px solid #fff;
    border-top-color: transparent;
    animation: load .5s ease infinite;
    margin: 0 auto;

    @keyframes load {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

interface CardProps {
    flex?: boolean;
}

export const Card = styled.div<CardProps>`
    padding: 32px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.cardBorder};
    background: ${props => props.theme.colors.cards};

    ${props => props.flex && css`
        flex: 1;
    `};
`;