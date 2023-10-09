import {styled, keyframes} from 'styled-components';

export const DashboardSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const First = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    span {
        text-transform: uppercase;
        font-size: 2rem;
        font-weight: 500;
    }

    svg {
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
export const EmptyOrders = styled.div`
    text-align: center;
    margin-top: 4rem;
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
export const Cards = styled.div`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
`
export const Card = styled.div`
    border: 1px solid ${({color}) => color};
    border-bottom-width: 5px;
    width: 100%;
    height: 135px;
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
`
export const Third = styled.div`
    h3 {
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
    }
`
export const Statuses = styled.div`
    margin-top: 1rem;
    display: flex;
`
export const Status = styled.p`
    padding: 1rem 1.5rem;
    background: white;
    text-transform: capitalize;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({theme, active}) => active ? 'black' : theme.colors.light.gray1};
    border-bottom: 2px solid transparent;

    &.tab-active {
        color: black;
        border-bottom-color: ${({theme}) => theme.colors.neutral.blue};
    }
`
export const Orders = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Order = styled.div`
    background: ${({theme}) => theme.colors.bg.gray2};
    padding: 2rem 3rem;
`
export const OrderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            font-weight: 500;
        }

        span {
            font-size: 2rem;
            font-weight: 600;
        }
    }

    div:nth-child(1){    
        span {
           color: ${({theme}) => theme.colors.neutral.blue};
        }
    }
`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${({theme}) => theme.colors.light.gray2};
    margin: 1rem 0;
`
export const OrderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const OrderStatus = styled.div`
    span {
        text-transform: capitalize;
        color: ${({theme, orderstatus}) => orderstatus === 'pending' ? theme.colors.light.brown : orderstatus === 'accepted' ? theme.colors.light.green1 : orderstatus === 'delivered' ? theme.colors.light.green1 : orderstatus === 'rejected' ? theme.colors.neutral.red : ''};
    }
`
export const Left = styled.div`

    p {
        font-weight: 500;
    }
`
export const Right = styled.div`
    button {
        background: white;
        padding: 1rem 2rem;
        text-transform: capitalize;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.light.gray1};
    }
`