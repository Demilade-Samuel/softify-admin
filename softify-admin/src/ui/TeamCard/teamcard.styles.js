import styled from "styled-components";

export const TeamCardContainer = styled.div`
    max-width: 285px;
    height: 256px;
    width: 100%;
    padding: 2rem;
    border-radius: 16px;
    background: ${({theme}) => theme.colors.bg.blue1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`
export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const You = styled.div`
    width: 96px;
    height: 24px;
    text-transform: uppercase;
    text-align: center;
    background: ${({theme}) => theme.colors.bg.pink2};
    font-size: 1.5rem;
    font-weight: 500;
`
export const ImageContainer = styled.div`
    width: 80px;
    height: 80px;
    background: white;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

`
export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    p {
        font-size: 1.5rem;
    }
`