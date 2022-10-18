import styled from "styled-components"

export const FooterStyled = styled.footer`
    position: relative;
    padding-top: -16px;
    margin-top: -16px;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.footer};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        padding-top: 360px;
        margin-top: -360px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        padding-top: 272px;
        margin-top: -272px;
    }
`

export const SocialIcons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.75rem;
`

export const FooterFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 5rem 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1190px;
        padding-right: 2.5rem;
        padding-left: 2.5rem;
        margin-right: auto;
        margin-left: auto;
    }
`