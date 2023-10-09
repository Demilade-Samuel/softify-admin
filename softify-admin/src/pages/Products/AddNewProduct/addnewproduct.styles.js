import styled from 'styled-components';

export const AddNewProductSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const AddNewProductForm = styled.form`
    display: grid;
    grid-template-columns: 3fr 1fr;
`
export const Left = styled.div`
    border-right: 1px solid ${({theme}) => theme.colors.light.gray2};
`
export const Type = styled.div`
    padding-top: 3rem;
    padding-left: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${({theme}) => theme.colors.neutral.black3};
`
export const Product = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
        cursor: pointer;

        &.type-active {
            background: ${({theme}) => theme.colors.neutral.purple};
        }
    }
`
export const Service = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 1.5px solid ${({theme}) => theme.colors.bg.gray7};
        cursor: pointer;

        &.type-active {
            background: ${({theme}) => theme.colors.neutral.purple};
        }
    }
`
export const Inputs = styled.div`
    width: 600px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h2 {
        font-size: 2.4rem;
        font-weight: 500;

        svg {
            cursor: pointer;
        }
    }
`
export const Attributes = styled.div`
    width: 100%;
`
export const GridTwo = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
`
export const Vendor = styled.div`

`
export const Add = styled.p`
    font-size: 1.3rem;
    cursor: pointer;
    color: ${({theme}) => theme.colors.neutral.blue};
    margin-top: 3rem;
`
export const CostPrice = styled.div`
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    svg {
        cursor: pointer;
    }
`
export const SellingPrice = styled.div`
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    svg {
        cursor: pointer;
    }
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: white;
`
export const Generate = styled.button`
    background: ${({theme}) => theme.colors.neutral.blue};
    height: 35px;
    padding: 0 1.5rem;
    border-radius: 5px;
    color: ${({theme}) => theme.colors.light.gray3};
`
export const Right = styled.div`
    width: 100%;
`
export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    padding: 3rem;
`
export const ImageOne = styled.div`
    min-height: 200px;
    width: 100%;
    border: 2px dashed ${({theme}) => theme.colors.bg.gray7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    opacity: ${({dragactive}) => dragactive === 'true' ? '0.5' : '1'};
    border-color: ${({imageone, theme}) => imageone ? 'transparent' : theme.colors.bg.gray7};
    position: relative;

    label {
        margin-left: 0.4rem;

        input[type='file']{
            display: none;
        }
    }
    img {
        width: 100%;
        height: 100%;
    }
    div:nth-child(2){
        margin-top: 1rem;

        span {
            color: ${({theme}) => theme.colors.neutral.blue};
            cursor: pointer;
        }
    }
    .edit-button {
        cursor: pointer;
        margin-top: 1rem;
    }
    .drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`
export const ImageTwo = styled.div` 
    min-height: 200px;
    width: 100%;
    border: 2px dashed ${({theme}) => theme.colors.bg.gray7};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-color: ${({imagetwo, theme}) => imagetwo ? 'transparent' : theme.colors.bg.gray7};
    opacity: ${({dragactive}) => dragactive === 'true' ? '0.5' : '1'};
    position: relative;

    input[type='file']{
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
    } 
    span {
        color: ${({theme}) => theme.colors.dark.gray};
        font-size: 8rem;
        cursor: pointer;
    }
    .edit-button {
        cursor: pointer;
        margin-top: 1rem;
    }
    .drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`
export const ImageThree = styled.div`
    min-height: 200px;
    width: 100%;
    border: 2px dashed ${({theme}) => theme.colors.bg.gray7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-color: ${({imagethree, theme}) => imagethree ? 'transparent' : theme.colors.bg.gray7};
    opacity: ${({dragactive}) => dragactive === 'true' ? '0.5' : '1'};
    position: relative;

    input[type='file']{
        display: none;
    }
    img {
        width: 100%;
        height: 100%;
    } 
    span {
        color: ${({theme}) => theme.colors.dark.gray};
        font-size: 8rem;
        cursor: pointer;
    }
    svg {
        cursor: pointer;
    }
    .edit-button {
        cursor: pointer;
        margin-top: 1rem;
    }
    .drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`
export const ImageFour = styled.div`
    min-height: 200px;
    width: 100%;
    border: 2px dashed ${({theme}) => theme.colors.bg.gray7};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-color: ${({imagefour, theme}) => imagefour ? 'transparent' : theme.colors.bg.gray7};
    opacity: ${({dragactive}) => dragactive === 'true' ? '0.5' : '1'};
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
    input[type='file']{
        display: none;
    }
    span {
        color: ${({theme}) => theme.colors.dark.gray};
        font-size: 8rem;
        cursor: pointer;
    }
    svg {
        cursor: pointer;
    }
    .edit-button {
        cursor: pointer;
        margin-top: 1rem;
    }
    .drag-file-element {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
    }
`