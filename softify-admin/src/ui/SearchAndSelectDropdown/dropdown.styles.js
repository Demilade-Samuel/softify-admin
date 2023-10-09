import styled from "styled-components";

export const FormDropdownContainer = styled.div`
    width: 100%;
`
export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        text-transform: capitalize;
    }  
`
export const DropdownContainer = styled.div`
    width: 100%;
    margin-top: 1rem;
    position: relative;
`
export const FormSelect = styled.div`
    display: flex;
    height: 44px;
    align-items: center;
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    

    &:hover {
        background: ${({theme}) => theme.colors.bg.gray3};
    }

    label {
        width: 100%;
        height: 100%;
    }
    
    input {
        width: 100%;
        height: 100%;
        padding-left: 1rem;
        border: none;
        border-right: 1px solid ${({theme}) => theme.colors.bg.gray6};
        background: transparent;
        color: ${({theme}) => theme.colors.neutral.black2};
        font-size: 1.6rem;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }
    }

    div {
        flex-basis: 48px;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            path {
                stroke: ${({theme}) => theme.colors.light.gray1};
            }
        }
    }

    &.error {
        border-color: ${({theme}) => theme.colors.light.brown};

        input {
            border-right-color: ${({theme}) => theme.colors.light.brown};
            color:  ${({theme}) => theme.colors.light.brown};
        }

        svg {
        
            path {
                stroke: ${({theme}) => theme.colors.light.brown};
            }
        }
    }
    &.disabled {
        &:hover {
            background: transparent;
        }
    }
`
export const Dropdown = styled.div`
    display: ${({isdropdown}) => isdropdown === 'true' ? 'flex' : isdropdown === 'false' ? 'none' : 'none'};
    flex-direction: column;
    align-items: start;
    justify-content: start;
    background: ${({theme}) => theme.colors.bg.gray1};
    width: 100%;
    position: absolute;
    left: 0;
    top: 110%;
    border: 1px solid ${({theme}) => theme.colors.light.gray2};
    max-height: 300px;
    overflow: auto;
    z-index: 30;


    div {
        color: ${({theme}) => theme.colors.neutral.black2};
        padding: 1.5rem 1rem;
        width: 100%;
        cursor: pointer;
        font-size: 1.3rem;

        &:hover {
            background-color: ${({theme}) => theme.colors.bg.gray5};
        }
    }

    &.disabled {
        display: none !important;
    }
`
export const ErrorMessage = styled.p`
    text-align: center;
    color: ${({theme}) => theme.colors.light.brown};
    font-size: 1.3rem;
`