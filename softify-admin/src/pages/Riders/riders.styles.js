import {styled, keyframes} from 'styled-components';

export const RidersSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};
    height: 100%;
`
export const Statuses = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    padding: 0.5rem 0.8rem;
    display: inline-flex;

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
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
`
export const Left = styled.div`

    p {
        font-size: 2.4rem;
        font-weight: 600;
        color: ${({theme}) => theme.colors.neutral.black2};
    }
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`


export const EmptyState = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
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
export const Error = styled.div`
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