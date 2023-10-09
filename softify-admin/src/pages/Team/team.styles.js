import styled from "styled-components";
import Calendar from "../../assets/svgs/Calendar.svg";

export const TeamSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    padding-bottom: 8rem;
`
export const FirstContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SecondContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-top: 4rem;
`
export const Position = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 189px;
    width: 100%;
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
        height: 44px;
        appearance: none;
        -webkit-appearance: none;
        padding: 0 1rem;
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
export const Joined = styled.label`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 189px;
    width: 100%;

    input {
        padding: 0 1rem;
        height: 44px;
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
export const TeamMembers = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`
export const NoMember = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-top: 1px solid ${({theme}) => theme.colors.light.purple};
    background: ${({theme}) => theme.colors.bg.gray1};
`
