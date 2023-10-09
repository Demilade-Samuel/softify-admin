import {styled, keyframes} from "styled-components";

export const AddVendorSection = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
    display: grid;
    grid-template-columns: 3fr 1fr;
`
export const Left = styled.div`
    border-right: 1px solid ${({theme}) => theme.colors.light.gray2};
`
export const VendorForm = styled.form`

`
export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem; 
    align-items: start;
    padding: 2rem 3rem;
    width: 590px;

    h2 {
        font-size: 2rem;
        font-weight: 500;
        background: ${({theme}) => theme.colors.bg.gray3};
        padding: 2rem 3rem;
    }
`
export const PrimaryContactLabel = styled.label`
    width: 100%;
`
export const GridThree = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 80px 1fr 1fr;
    gap: 1rem;
    align-items: center;
`
export const ContactContainer = styled.div`
    width: 100%;

    p {
        color: ${({theme}) => theme.colors.neutral.blue};
        font-size: 1.1rem;
        margin-top: 1rem;
        cursor: pointer;
    }
`
export const GridTwo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    input {
        width: 100%;
    }
`
export const AddressContainer = styled.div`
    width: 100%;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            cursor: pointer;
        }
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
export const Buttons = styled.div`
    background-color: white;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;


    button {
        width: 100px;
        
        svg {
            animation: ${roll} 1s infinite linear; 
        }
    }

`
export const Cancel = styled.button`
    height: 35px;
    border-radius: 5px;
    background:  ${({theme}) => theme.colors.light.gray3};
    color: ${({theme}) => theme.colors.neutral.black2};
    text-transform: capitalize;
    font-weight: 500;
    padding: 0 1.5rem;
`

export const Right = styled.div`

`