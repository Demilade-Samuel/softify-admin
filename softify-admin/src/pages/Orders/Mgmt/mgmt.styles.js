import {styled, keyframes} from "styled-components";

export const MgmtSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const Statuses = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    padding: 0.8rem;
    display: inline-flex;

`
export const Status = styled.span`
    padding: 1rem 1.5rem;
    color: ${({theme}) => theme.colors.light.gray1};
    background: transparent;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;


    &.tab-active {
        color: ${({theme}) => theme.colors.neutral.purple};
        background: ${({theme}) => theme.colors.bg.purple};
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
    gap: 2rem;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`