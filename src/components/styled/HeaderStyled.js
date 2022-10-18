import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 3.75rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        padding: 2.5rem;
        margin-bottom: 2.5rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        max-width: 74.375rem; // 1190px
        padding: 3.125rem 2.5rem;
        margin: 0 auto 1rem auto;
    }
`