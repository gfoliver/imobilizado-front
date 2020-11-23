import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;

    .MuiPaper-root {
        background: ${props => props.theme.colors.cards};
        border: 1px solid ${props => props.theme.colors.cardBorder};
        color: ${props => props.theme.colors.text};
        border-radius: 4px;
        height: 100%;
        display: flex;
        flex-direction: column;

        .MuiTableBody-root {
            height: 100%;
        }

        .Component-horizontalScrollContainer-5 {
            flex: 1;
        }

        .MuiTableCell-head {
            background: rgba(0,0,0,0.15);
            color: ${props => props.theme.colors.text};
            font-size: 20px;
        }

        .MuiTableSortLabel-root,
        .MuiTableSortLabel-root.MuiTableSortLabel-active {
            color: ${props => props.theme.colors.text};

            svg {
                stroke: ${props => props.theme.colors.text};
            }
        }

        .MuiTableCell-footer {
            * {
                color: ${props => props.theme.colors.textLight};
            }
        }


        * {
            border: none;
        }

        tr {
            padding: 0 8px;

            td {
                padding: 24px 16px;
                border: none;
                font-size: 16px;
            }

            &:nth-child(even) {
                background: rgba(255,255,255, 0.05);
            }
        }

        .buttons {
            display: flex;

            button + button {
                margin-left: 16px;
            }
        }

        .emptyMessage {
            color: ${props => props.theme.colors.text};
        }
    }
`;