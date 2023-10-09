import styled from "styled-components";

export const PackagesSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};

    h1 {
        font-size: 2.4rem;
        font-weight: 600;
    }
`
export const AllPackages = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: start;

`
export const Packed = styled.div`
    background: ${({theme}) => theme.colors.bg.gray2};
`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    background: ${({color}) => color};
    padding: 2rem;
`
export const Card = styled.div`
    background: white;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
`
export const Shipped = styled.div`
    background: ${({theme}) => theme.colors.bg.gray2};

    ${Card} {
        height: 154px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const Delivered = styled.div`
    background: ${({theme}) => theme.colors.bg.gray2};
`
export const Cards = styled.div`
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`
export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input[type='checkbox']{
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid black;
        position: relative;
        cursor: pointer;

        &:checked::before {
            content: "";
            width: 14px;
            height: 14px;
            background: ${({theme}) => theme.colors.neutral.purple};
            position: absolute;
            top: 2px;
            left: 2px;
        }
    }
`
export const Name = styled.p`
    font-size: 2.2rem;
    font-weight: 400;
`
export const Id = styled.div`
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 1rem;
    font-size: 1.7rem;

    span {
        height: 18px;
        width: 2px;
        background: black;
    }

    p:last-child { 
        color: ${({theme}) => theme.colors.neutral.blue};;
    }
        
`
export const Rider = styled.p`
    span {
        font-weight: 300;
    }
`
export const Date = styled.p`
    font-size: 1.5rem;
`
export const Right = styled.div`
    font-size: 1.7rem;
    font-weight: 500;
`