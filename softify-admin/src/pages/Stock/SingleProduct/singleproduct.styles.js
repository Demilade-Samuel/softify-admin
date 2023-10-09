import {styled, keyframes} from "styled-components";

export const SingleProductSection = styled.section`
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
export const TopLeft = styled.div`
    h2 {
        font-size: 2.4rem;
        font-weight: 600;
    }
`
export const TopRight = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`
export const EditButton = styled.button`
    width: 116px;
    height: 40px;
    background: ${({theme}) => theme.colors.bg.gray5};
    color: ${({theme}) => theme.colors.neutral.black3};
    border-radius: 5px;
    font-weight: 500; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
export const DeleteButton = styled.button`
    width: 116px;
    height: 40px;
    background: ${({theme}) => theme.colors.bg.pink};
    color: ${({theme}) => theme.colors.neutral.pink2};
    border-radius: 5px;
    font-weight: 500; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`
export const ProductDetails = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;
`
export const ProductDetailsLeft = styled.div`
    flex-basis: 25%;
`
export const ProductImage = styled.div`
    width: 100%;
    max-height: 200px;
    border: 1px solid ${({theme}) => theme.colors.neutral.blue};
    border-radius: 4px;
    overflow: hidden;


    img {
        width: 100%;
        height: 100%;
        object-fit: over;
    }
`
export const Dots = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`
export const Dot = styled.div`
    width: 10px;
    height: 10px;
    border: 1px solid ${({theme}) => theme.colors.neutral.blue};
    border-radius: 100%;
    background: ${({theme, active}) => active === 'true' ? theme.colors.neutral.blue : 'transparent'};
    cursor: pointer;
`
export const ProductDetailsRight = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 2rem;
`
export const Name = styled.div`
    width: 354px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const SP = styled.div`
    width: 147px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const BrandName = styled.div`
    width: 260px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const Stock = styled.div`
    width: 114px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        color: ${({theme}) => theme.colors.neutral.blue};
    }
`
export const Categories = styled.div`
    width: 354px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const Sku = styled.div`
    width: 160px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        color: ${({theme}) => theme.colors.neutral.blue};
    }
`
export const Vendor = styled.div`
    width: 147px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 1rem;
        border-radius: 3px;
        margin-top: 1rem;
    }
`
export const ProductDescription = styled.div`
    margin-top: 5rem;

    h2 {
        font-size: 2rem;
        font-weight: 500;
        padding: 2rem;
        background: ${({theme}) => theme.colors.bg.gray3};
        display: inline;
    }

    h4 {
        font-weight: 400;
        font-size: 1.6rem;
        margin-top: 5rem;
    }
`
export const Description = styled.div`
    max-width: 995px;
    width: 100%;
    padding: 2rem;
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    margin-top: 1rem;
    border-radius: 3px;
`
export const Details = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2rem;
`
export const Color = styled.div`
    width: 354px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 0 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        height: 44px;
        display: flex;
        align-items: center;
    }
`
export const Weight = styled.div`
    width: 166px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        height: 44px;
        border-radius: 3px;
        margin-top: 1rem;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            border-left: 1px solid ${({theme}) => theme.colors.bg.gray6}; ;
            width: 55px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }    
`
export const Dimensions = styled.div`
    width: 491px;
`
export const Measurements = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`
export const L = styled.div`
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    padding: 0 1rem;
    height: 44px;
    display: flex;
    align-items: center;

    span {
        font-size: 1.3rem;
        margin-right: 1rem;
    }
`
export const B = styled.div`
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    padding: 0 1rem;
    height: 44px;
    display: flex;
    align-items: center;

    span {
        font-size: 1.3rem;
        margin-right: 1rem;
    }
`
export const W = styled.div`
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    padding: 0 1rem;
    height: 44px;
    display: flex;
    align-items: center;

    span {
        font-size: 1.3rem;
        margin-right: 1rem;
    }
`
export const Unit = styled.div`
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    padding: 0 1rem;
    height: 44px;
    display: flex;
    align-items: center;
`
export const CostPrice = styled.div`
    width: 354px;

    div {
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        width: 100%;
        padding: 0 1rem;
        border-radius: 3px;
        margin-top: 1rem;
        height: 44px;
        display: flex;
        align-items: center;
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
    justify-content: center;
    align-items: center;

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