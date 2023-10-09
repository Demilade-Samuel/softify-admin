import styled from "styled-components";

export const DetailsSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
    display: grid;
    grid-template-columns: 3fr 2fr;
`
export const Left = styled.div`
    border-right: 1px solid ${({theme}) => theme.colors.light.gray2};
    padding: 3rem 2rem;
    overflow-y: auto;
`
export const Top = styled.div`
    font-size: 2.3rem;
    font-weight: 500;

    span {
        text-decoration: underline;
        font-size: 1.3rem;
        cursor: pointer;
    }
`
export const Steps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`
export const Step = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme}) => theme.colors.bg.gray4};
    padding: 1rem 2rem;

    h3 {
        font-weight: 500;
        font-size: 2rem;
        color: ${({theme}) => theme.colors.neutral.black4};
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;

        button {
            width: 130px;
        }
    }
`
export const Task = styled.div`
    color: ${({theme}) => theme.colors.light.gray1};
`
export const ItemsList = styled.div`
    margin-top: 2rem;
    background: ${({theme}) => theme.colors.bg.gray4};
    padding: 1rem 2rem;

`
export const Head = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.neutral.black4};
`
export const List = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
        color: ${({theme}) => theme.colors.neutral.black4};

        p {
            font-size: 2rem;
            font-weight: 500;
        }
        span {
            font-size: 1.4rem;
        }
    }

    .qty {
        margin-left: 4rem;
        font-size: 2rem;
        font-weight: 700;
    }
`
export const Dispatch = styled.div`
    margin-top: 2rem;
    background: ${({theme}) => theme.colors.bg.gray4};
    padding: 1rem 2rem;
`
export const DispatchTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
    font-size: 2rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.neutral.black4};
    }
`
export const Status = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
        color: ${({theme}) => theme.colors.light.gray1};
    }

    p {
        color: ${({theme}) => theme.colors.light.brown} !important;
        border: 1px solid ${({theme}) => theme.colors.light.brown};
        text-transform: capitalize !important;
        padding: 0.3rem 1rem;
        border-radius: 5px;
        background:  ${({theme}) => theme.colors.bg.darkYellow};
    }
`
export const DispatchBottom = styled.div`
    margin-top: 1rem;

    p {
        font-size: 1.8rem;
        color: ${({theme}) => theme.colors.neutral.black4};

        &:nth-child(3){
            font-size: 2.3rem;
            font-weight: 500;

            span {
                font-size: 1.3rem;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`

export const Right = styled.div`
    padding: 3rem 2rem;
`
export const RightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({theme}) => theme.colors.neutral.black4};
    }
    
    div {
        display: flex;
        align-items: center;
        gap: 2rem;

        span {
            color: ${({theme}) => theme.colors.light.gray1};
            text-transform: capitalize;
        }

        p {
            color: ${({theme}) => theme.colors.light.brown} !important;
            border: 1px solid ${({theme}) => theme.colors.light.brown};
            text-transform: capitalize !important;
            padding: 0.3rem 1rem;
            border-radius: 5px;
            background:  ${({theme}) => theme.colors.bg.darkYellow};
        }
    }
`
export const RightBottom = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1rem;
    color: ${({theme}) => theme.colors.neutral.black2};

    div {
        display: flex;
        align-items: center;
        gap: 2rem;

        p {
            font-size: 1.8rem;
        }
        span {
            font-size: 1.8rem;
            font-weight: 500;
        }
        .paid {
            text-transform: uppercase;
            border: 1px solid ${({theme}) => theme.colors.dark.green2};
            color: ${({theme}) => theme.colors.dark.green2};
            border-radius: 5px;
            padding: 0.3rem 1.5rem;
            background: ${({theme}) => theme.colors.bg.green};
        }
    }

    button {
        margin-top: 1rem;
        padding: 0 1.5rem;
        height: 35px;
        border-radius: 5px;
        border: 1px solid ${({theme}) => theme.colors.light.purple};
        color: ${({theme}) => theme.colors.light.purple};
        background: white;
        cursor: pointer;
    }
`