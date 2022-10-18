import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    // GLOBAL RESET
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
    }

    // GLOBAL STYLES
    body {
        font-family: 'Epilogue', sans-serif;
        font-size: 1rem;
        line-height: 1.75;
        color: ${({ theme }) => theme.colors.bodyText};
        background-color: ${({ theme }) => theme.colors.white};

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            font-size: 1.125rem;
        }
    }

    h1,
    h2 {
        line-height: 1.16;
        color: ${({ theme }) => theme.colors.dark};
    }
`