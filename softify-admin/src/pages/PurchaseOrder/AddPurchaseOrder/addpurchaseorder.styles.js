import styled from 'styled-components';

export const AddPurchaseSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
    display: grid;
    grid-template-columns: 3fr 1fr;
    color: ${({theme}) => theme.colors.neutral.black2}; 
`

export const Left = styled.div`
    border-right: 1px solid ${({theme}) => theme.colors.light.gray2};

`
export const Right = styled.div`

`
export const PurchaseOrderForm = styled.form`

`
export const Inputs = styled.div`
    width: 670px;
    display: flex;
    flex-direction: column;
    gap: 3rem; 
    align-items: start;
    padding: 2rem 3rem;
`
export const PurchaseIdField = styled.div`
    width: 100%;
`
export const PIDTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        cursor: pointer;
    }
`
export const PIDBottom = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 231px auto;
    gap: 2rem;
    margin-top: 2rem;

    button {
        color: ${({theme}) => theme.colors.neutral.blue};
        border-radius: 5px;
        background: ${({theme}) => theme.colors.bg.gray3};
        height: 44px;
        padding: 0 2rem;
        border: 1px solid ${({theme}) => theme.colors.bg.gray3};
        margin-top: 1rem;
        width: 230px;

        &.generated {
            background: ${({theme}) => theme.colors.bg.gray3};
            color: ${({theme}) => theme.colors.light.purple};
            cursor: not-allowed;
        }
    }
`
export const GridThree = styled.div`
    max-width: 670px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`
export const PSDropdownContainer = styled.div`
    width: 100%;

    p {  
        font-weight: 600;
        text-transform: uppercase;       
    }
`
export const TableContainer = styled.div`
    padding: 2rem 3rem;
    width: 100%;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid ${({theme}) => theme.colors.light.gray2};
        padding: 1rem;
    }
    .product-head {
        width: 320px;
        text-align: left;
    }
    .quantity {
        width: 100px;
    }
    .unit-price {
        width: 148px;
        text-align: right;
    }
    .tax {
        width: 151px;
        text-align: left;
    }
    .subtotal {
        text-align: right;
    }
    .product-data {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
    .quantity-data {
        text-align: right;
        color: ${({theme}) => theme.colors.neutral.blue};
        font-weight: 500;
    }
    .unitprice-data {
        text-align: right;
    }
    .tax-data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }
    .subtotal-data {
        text-align: right;
        color: ${({theme}) => theme.colors.neutral.blue};
        font-weight: 500;
    }
`
export const SubTotalContainer = styled.div`
    padding: 2rem 3rem;
`
export const SubTotal = styled.div`
    padding: 2rem;
    background: ${({theme}) => theme.colors.bg.gray3};

    h2 {
        font-weight: 500;
        font-size: 1.8rem;
    }
`
export const SubTotalGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 4rem;
`
export const TotalContainer = styled.div`
    width: 100%;
`
export const TotalTop = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
`
export const ShowTotal = styled.div`
    border: 1px solid ${({theme}) => theme.colors.light.gray2};
    border-radius: 3px;
    margin-top: 1rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.neutral.blue};
`
export const NewLine = styled.p`
    font-size: 1.4rem;
    color: ${({theme}) => theme.colors.neutral.blue};
    cursor: pointer;
    margin-top: 2rem;
`
export const Buttons = styled.div`
    background-color: white;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

`
export const Cancel = styled.button`
    height: 35px;
    border-radius: 5px;
    background:  ${({theme}) => theme.colors.bg.gray3};
    color: ${({theme}) => theme.colors.neutral.black2};
    border: 1px solid ${({theme}) => theme.colors.bg.gray3};
    text-transform: capitalize;
    font-weight: 500;
    padding: 0 1.5rem;
`