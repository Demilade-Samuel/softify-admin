import {styled, keyframes } from "styled-components";
import Calendar from "../../../assets/svgs/Calendar.svg";

export const MgmtSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: capitalize;
    }
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        cursor: pointer;
        height: 35px;

        rect {
            height: 100%;
        }
    }
`
export const User = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 120px;
    position: relative;

    svg {
        position: absolute;
        top: 50%;
        left: 10%;
        
    }

    &::after {
        content: '>';
        position: absolute;
        right: 1.5rem;
        pointer-events: none;
        top: 47%;
        transform: rotate(90deg);
        font-size: 2.5rem;
        color: ${({theme}) => theme.colors.light.gray1}
    }

    select {
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        padding: 1.05rem 1rem;
        padding-left: 4rem;
        font-size: 1.6rem;
        background: ${({theme}) => theme.colors.bg.gray1};;
        border: 1px solid ${({theme}) => theme.colors.light.gray1};
        border-radius: 5px;
        cursor: pointer;
        outline: none;
        color: ${({theme}) => theme.colors.light.gray1};
        font-weight: 500;
        font-family: ${({theme}) => theme.font.poppins};

        &:focus {
        border-color: ${({theme}) => theme.colors.neutral.purple};
        outline: none;
    }
    }
`
export const Date = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 200px;

    input {
        padding: 1rem;
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.light.gray1};
        border-radius: 5px;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light.gray1};
        font-family: ${({theme}) => theme.font.poppins};

        &:focus,
        &:focus-within {
            outline: none;
            border-color: ${({theme}) => theme.colors.neutral.purple};
        }
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
        font-size: 2rem;
        cursor: pointer;
        background-image: url(${Calendar});
    }
`
export const Second = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Statuses = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    padding: 0.5rem 0.8rem;
    display: inline-flex;
    margin-top: 4rem;

`
export const Status = styled.span`
    padding: 0.5rem 1.5rem;
    color: ${({theme}) => theme.colors.light.gray1};
    background: transparent;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;


    &.active {
        color: ${({theme}) => theme.colors.neutral.purple};
        background: ${({theme}) => theme.colors.bg.purple};
    }
`
export const Cards = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
`
export const Card = styled.div`
    width: 380px;
    min-height: 388px;
    background: ${({theme}) => theme.colors.bg.blue1};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    gap: 2.5rem;
    padding: 3rem;
`
export const CardTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    
    p {
        text-transform: capitalize ;
        font-size: 1.5rem;
    }
`
export const Percent = styled.div`
    font-size: 2.4rem;
    font-weight: 600;
`
export const Expires = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`
export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const EditButton = styled.button`
    width: 105px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${({theme}) => theme.colors.bg.purple};
    font-weight: 500;
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.neutral.purple};
    border-radius: 5px;
    cursor: pointer;
`
export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    background: ${({theme}) => theme.colors.bg.gray3};
    color: ${({theme}) => theme.colors.light.brown};
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 5px;
    cursor: pointer;
    width: 105px;
    height: 33px;
`
export const List = styled.ul`
    list-style: disc;

    li {
        font-size: 1.3rem;
        font-weight: 400;
    }
`
const roll = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const Loading = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    svg {
        animation: ${roll} 1s infinite linear;
    }
`
export const ErrorMessage = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`