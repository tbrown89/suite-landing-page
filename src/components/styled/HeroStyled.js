import styled from "styled-components"

// INTRO SECTION
export const Intro = styled.section`
    position: relative;
    max-width: 343px;
    margin: 0 auto 3.5rem auto;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        max-width: 100%;
        margin: 0;
    }

    h1,
    p {
        margin-bottom: 2rem;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            margin-bottom: 2.5rem;
        }
    }

    h1 {
        font-size: 2.375rem;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            position: relative;
            width: 125%;
            font-size: 3.5rem;
            letter-spacing: -0.78px;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            font-size: 4.5rem;
            letter-spacing: -1px;
            width: 135%;
        }

        span {
            font-weight: 400;
        }
    }

    p {

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            width: 85%;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            margin-bottom: 3.25rem;
            width: 70%;
        }
    }

    .heroPattern {
        position: absolute;
        top: -10%;
        right: 6%;
        width: 50%;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            right: -10%;
            width: 55%;
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            right: -22%;
            width: 60%;
        }
    }
`

// HERO IMAGE SECTION
export const HeroImg = styled.section`
    margin-bottom: 3.5rem;
    

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            margin: 0;
        }

    img {
        margin: 0 auto;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            max-width: 17.5rem; // 280px
        }

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            max-width: 21.875rem; // 350px
        }
    }
`

export const Stats = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 231px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
            flex-direction: row;
            justify-content: space-around;
        }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        flex-direction: column;
        justify-content: center;
        gap: 4rem;
        padding: 0 5rem 0 6rem;
        margin-bottom: 0;
    }

    h2,
    p {
        text-align: center;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            text-align: left;
    }
}

    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 1rem;
        letter-spacing: 2.5px;
        text-transform: uppercase;
    }
`