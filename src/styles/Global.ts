import styled, { createGlobalStyle } from 'styled-components';

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

        input, button {
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
        min-height: calc(100vh - 78px);
        display: grid;
        grid-template-columns: 240px 1fr;
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