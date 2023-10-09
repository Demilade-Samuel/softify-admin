import styled from 'styled-components';

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
    padding: 3rem 0;
    overflow-y: auto;
`
export const Steps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 2rem 0 2rem;
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

        p {
            color: ${({theme}) => theme.colors.light.gray1};
        }

        button {
            width: 200px;
        }
    }
`
export const LocationSelect = styled.div`
    width: 200px;
    position: relative;

    &::before,
    &::after {
        position: absolute;
        content: '';
        right: 1.5rem;
        pointer-events: none;
    }

    &::before {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid ${({theme}) => theme.colors.light.gray1};
        top: 35%;
    }
    &::after {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid ${({theme}) => theme.colors.light.gray1};
        top: 55%;
    }
`
export const Select = styled.select`
    width: 100%;
    appearance: none;
    -webkit-appearance: none;
    padding: 0 1rem;
    height: 35px;
    font-size: 1.6rem;
    background: ${({theme}) => theme.colors.light.purple};
    border: 2px solid ${({theme}) => theme.colors.light.purple};
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    color: ${({theme}) => theme.colors.light.gray3};
    font-family: ${({theme}) => theme.font.poppins};

    &:focus {
        border-color: ${({theme}) => theme.colors.neutral.purple};
        outline: none;
    }
`
export const Option = styled.option`
`
export const ItemsList = styled.div`
    margin: 2rem 2rem 14rem 2rem;
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
            display: block;
        }
    }

    .qty {
        margin-left: 4rem;
        font-size: 2rem;
        font-weight: 700;
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
export const ButtonOptions = styled.div`
    background: white;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const Approve = styled.button`
    padding: 0 2rem;
    height: 35px;
    border-radius: 5px;
    color:  ${({theme}) => theme.colors.light.gray3};
    background: ${({theme}) => theme.colors.neutral.blue};
    text-transform: capitalize;
    font-weight: 500;
    max-width: 110px;
    width: 100%;
`
export const Cancel = styled.button`
    padding: 0 2rem;
    height: 35px;
    border-radius: 5px;
    background:  ${({theme}) => theme.colors.light.gray3};
    color: ${({theme}) => theme.colors.neutral.black2};
    text-transform: capitalize;
    font-weight: 500;
    max-width: 110px;
    width: 100%;
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
        .pending {
            color: ${({theme}) => theme.colors.light.brown} !important;
            border: 1px solid ${({theme}) => theme.colors.light.brown};
            text-transform: capitalize !important;
            padding: 0.3rem 1rem;
            border-radius: 5px;
            background:  ${({theme}) => theme.colors.bg.darkYellow};
        }
        .inbound {
            color: ${({theme}) => theme.colors.dark.yellow} !important;
            border: 1px solid ${({theme}) => theme.colors.dark.yellow};
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
`