import styled from "styled-components"


export const SearchContainer = styled.div`
    width: 350px;
    height: 44px;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${({theme}) => theme.colors.neutral.gray2};
    padding: 0 1rem;
    border-radius: 5px;

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        color: ${({theme}) => theme.colors.neutral.black5};
        font-size: 1.4rem;
        font-weight: 500;

        &:focus {
            border: none;
        }

        &:disabled {
            color: ${({theme}) => theme.colors.light.purple};
        }
    }

    .left {
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    &:focus-within {
        border-color: ${({theme}) => theme.colors.pressed.blue};
    }

    &:hover {
        background: ${({theme}) => theme.colors.bg.gray1};
    }
    &.disabled {
        border-color: ${({theme}) => theme.colors.light.purple};  
    }
    &.valid {
        border-color: ${({theme}) => theme.colors.pressed.blue};
    }
`