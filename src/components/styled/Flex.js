import styled from "styled-components"

export const HeroFlexMd = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5.5rem;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        margin: 0;
    }
`

export const HeroFlexLg = styled.div`
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        display: flex;
    }
`