import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.cardBorder};
    overflow: hidden;
`;

export const Content = styled.div`
    padding: 16px 12px;
    background-color: ${props => props.theme.colors.cards};
    position: relative;

    .title {
        font-size: 14px;
        margin-bottom: 12px;
    }

    .description {
        font-size: 12px;
        color: ${props => props.theme.colors.textLight};
        font-weight: 500;

        .item + .item {
            margin-top: 8px;
        }
    }

    .buttons {
        position: absolute;
        right: 8px;
        bottom: 8px;
        display: flex;

        button {
            padding: 8px;
            border-radius: 4px;
            color: #fff;
            border: none;
            margin-right: 4px;
            transition: all .3s ease;
            cursor: pointer;

            &:last-child {
                margin-right: 0;
            }

            svg {
                width: 16px;
                height: 16px;
                display: block;
            }

            &.primary {
                background-color: ${props => props.theme.colors.primary};
            
                &:hover, 
                &:focus, 
                &:active {
                    background-color: ${props => shade(0.25, props.theme.colors.primary)};
                }
            }

            &.secondary {
                background-color: ${props => props.theme.colors.secondary};

                &:hover, 
                &:focus, 
                &:active {
                    background-color: ${props => shade(0.25, props.theme.colors.secondary)};
                }
            }
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    object-position: center;
`;

export const ConfirmContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;

    .checkbox-wrapper {
        margin-left: 16px;
        display: block;
        margin-bottom: 0;

        input {
            display: none;
        }

        .custom-checkbox {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            background-color: ${props => props.theme.colors.inputBorder};
            border: 1px solid ${props => props.theme.colors.cardBorder};
            transition: all .3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            margin: 0;

            svg {
                opacity: 0;
                visibility: hidden;
            }
        }

        input:checked + .custom-checkbox {
            background-color: ${props => props.theme.colors.primary};
            border-color: ${props => props.theme.colors.primary};

            svg {
                opacity: 1;
                visibility: visible;
            }
        }
    }
`;