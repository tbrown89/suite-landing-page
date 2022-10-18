import styled from "styled-components"

export const TestimonialStyled = styled.section`
    // GLOBAL STYLES
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 1rem;
    padding: 0 1rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.md}) {
        max-width: 689px;
        padding: 0 3.625rem;
        margin: 0 auto;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        max-width: 1110px;
        height: 545px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: left;
        margin-top: 9rem;

        &>* {
            flex-basis: 40%;
        }
    }

    // SHARED STYLES
    h2,
    h3 {
        color: ${({ theme }) => theme.colors.white};
    }

    header,
    blockquote {
        margin-bottom: 2.5rem;
    }

    // STYLES
    picture {

        img {
            position: relative;
            top: -175px;
            margin: 0 auto;

            @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            top: -23px;
            }
        }
    }

    .testimonial-pattern {
        position: absolute;
        top: 280px;
        left: 50%;
        transform: translateX(-50%);

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            top: 150px;
        }
    }

    header {

        h2 {
        font-size: 2.5rem;
        letter-spacing: -0.42px;

            span {
                font-weight: 400;
            }

            @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
                font-size: 3rem;
            }
        }
    }

    blockquote {

        p {
            font-size: 1.125rem;
            letter-spacing: 0.09px;

            @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
                font-size: 1.25rem;
            }
        }

    }
    

    footer {
        padding-bottom: 4rem;

        @media screen and (min-width: ${({ theme }) => theme.breakpoint.lg}) {
            padding-bottom: 0;
        }

        h3,
        p {
            text-transform: uppercase;
        }

        h3 {
        font-size: 1.125rem;
        }

        p {
            letter-spacing: 2.5px;
        }
    }

    .testimonial-content {
        padding-left: 2rem;
    }
`