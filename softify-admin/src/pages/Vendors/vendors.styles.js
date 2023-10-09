import { styled, keyframes } from 'styled-components';

export const VendorsSection = styled.section`
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
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    p {
        font-size: 2.4rem;
        font-size: 600;
    }
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
        cursor: pointer;
    }
`
export const EmptyState = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
    }

    div {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.neutral.blue};
        cursor: pointer;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    height: 75vh;

    svg {
        animation: ${roll} 1s infinite linear;
    }
`
export const Error = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;
    justify-content: center;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`