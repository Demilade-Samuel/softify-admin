import {styled, keyframes} from 'styled-components';

export const CustomersSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    align-items: center;
    justify-content: center;
    gap: 4rem;

    svg {
        animation: ${roll} 1s infinite linear;
    }

`
export const Error = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`