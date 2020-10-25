import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: string;
            textLight: string;
            background: string;
            cards: string;
            cardBorder: string;
            inputBorder: string;
            primary: string;
            secondary: string;
        }
    }
}