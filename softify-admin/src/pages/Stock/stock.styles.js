import {styled, keyframes} from 'styled-components';

export const StockSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    display: grid;
    grid-template-rows: auto auto 1fr;
    gap: 2rem;
`
export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
`
export const Card = styled.div`
    border: 1px solid ${({color}) => color};
    height: 135px;
    border-bottom-width: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    border-radius: 5px;

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }
`
const pulse = keyframes`
    0% {
        transform: scale(0.4);
    }
    100% {
        transform: scale(1);
    }
`
export const Top = styled.div`
    display: flex;
    gap: 5rem;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: capitalize;
    }

    .green-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({theme}) => theme.colors.light.green1};
        animation: ${pulse} 1s infinite linear alternate;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.div`

    P {
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: capitalize;
        color: ${({theme}) => theme.colors.neutral.black1};;
    }
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const TableContainer = styled.div`
    height: 100%;
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
`
const roll = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`
export const LoadingStocks = styled.div`
    padding: 2.5rem 0;
    text-align: center;

    svg {
        margin-top: 2rem;
        animation: ${roll} 1s infinite linear;
    }
`
export const ErrorStocks = styled.div`
    padding: 8rem 0;
    text-align: center;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`
export const ErrorProducts = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`
export const LoadingProducts = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        animation: ${roll} 1s infinite linear;
    }
`