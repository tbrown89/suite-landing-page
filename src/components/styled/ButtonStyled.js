import styled from "styled-components";

// BASE BUTTON STYLES
const ButtonBase = styled.button`
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    border-radius: 0.375rem;

    &:hover {
        cursor: pointer;
    }
`

// PRIMARY BUTTON STYLES
export const ButtonPrimary = styled(ButtonBase)`
    font-size: 1.125rem;
    height: 3.75rem;
    padding: 0 2rem;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    border: none;
    outline: none;

    &:hover {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors.grad1} 0%, ${({ theme }) => theme.colors.grad2} 49.21%, ${({ theme }) => theme.colors.grad3} 100%);
    }
`

// SECONDARY BUTTON STYLES
export const ButtonSecondary = styled(ButtonBase)`
    font-size: 0.875rem;
    height: 3rem;
    padding: 0 1rem;
    border: 1px solid ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.dark};
    }

     @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        font-size: 1rem;
        height: 3.5rem;
        padding: 0 1.5rem;
    }
`