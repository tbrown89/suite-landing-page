import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        max-width: 48rem;
        padding: 0 2.5rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        max-width: 74.375rem; // 1190px
        padding: 0 2.5rem;
    }
`