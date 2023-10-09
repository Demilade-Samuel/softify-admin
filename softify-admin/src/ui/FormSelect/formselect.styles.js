import styled from "styled-components";

export const FormSelectContainer = styled.div`
    width: 100%;
`
export const Top = styled.div`
    width: 100%;
`
export const SelectContainer = styled.div`
    height: 44px;
    width: 100%;
    margin-top: 1rem;
    position: relative;
`
export const Select = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({theme}) => theme.colors.bg.gray6};
    border-radius: 3px;
    padding: 0 1rem;
    width: 100%;
    height: 44px;

    &:hover {
        background: ${({theme}) => theme.colors.bg.gray3};
    }

    p {
        width: 100%;
        height: 100%;
        border: none;
        cursor: pointer;
        background: transparent;
        color: ${({theme}) => theme.colors.light.gray1};
        display: flex;
        align-items: center;
    }

    div {
        flex-basis: 40%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        svg {
            path {
                stroke: ${({theme}) => theme.colors.light.gray1};
            }
        }
    }

    &.error {
        border-color: ${({theme}) => theme.colors.light.brown};

        p {
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
    
        p {
            color: ${({theme}) => theme.colors.neutral.gray2};
        }
        svg {
        
        path {
            stroke: ${({theme}) => theme.colors.neutral.gray2};
        }
    }

        &:hover {
            background: transparent;
        }
    }    
    &:focus {
        border-color: ${({theme}) => theme.colors.pressed.blue};
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
        text-transform: capitalize;

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