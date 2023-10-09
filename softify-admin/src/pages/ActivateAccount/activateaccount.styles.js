import {styled, keyframes} from 'styled-components'

export const ActivateAccountSection = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    grid-template-rows: auto 1fr;
    color: ${({theme}) => theme.colors.neutral.black2};
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const LogoContainer = styled.div`
    padding: 3rem;
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
`
export const ActivateAccountContainer = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
`
export const Top = styled.div`
    background: ${({theme}) => theme.colors.bg.blue2};
    padding: 3rem;

    h2 {
        font-size: 2.1rem;
        font-weight: 600;
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
export const ActivateAccountForm = styled.form`
    background: white;
    padding: 12rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    button {
        max-width: 543px;
        width: 100%;
        height: 44px;

        svg {
        animation: ${roll} 1s infinite linear;
    }
    }
    
    input {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black5};
        height: 44px;
        width: 100%;
        border-radius: 3px;
        padding-left: 1rem;
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        margin-top: 1rem;

        &:focus,
        &:active {
            outline: none;
            border-color: ${({theme}) => theme.colors.neutral.blue};
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }

        &:hover {
            border-color: ${({theme}) => theme.colors.hover.blue};
        }
        
        &.error {
            border-color: ${({theme}) => theme.colors.light.brown};
            border-width: 2px;
        }
    }
`
export const Email = styled.label`
    max-width: 543px;
    width: 100%;
`
export const Password = styled.label`
    max-width: 543px;
    width: 100%;
    position: relative;

    p {
        font-size: 1.4rem;
        font-weight: 500;
        text-align: right;
        margin-top: 1rem;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    svg {
        position: absolute;
        top: 4.5rem;
        right: 1.5rem;
        cursor: pointer;
    }
`
export const ResetContainer = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
`
export const ResetForm = styled.form`
    background: white;
    padding: 12rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    button {
        max-width: 543px;
        width: 100%;
        height: 44px;

        svg {
        animation: ${roll} 1s infinite linear;
    }
    }
    
    input {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black5};
        height: 44px;
        width: 100%;
        border-radius: 3px;
        padding-left: 1rem;
        background: transparent;
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        margin-top: 1rem;

        &:focus,
        &:active {
            outline: none;
            border-color: ${({theme}) => theme.colors.neutral.blue};
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }

        &:hover {
            border-color: ${({theme}) => theme.colors.hover.blue};
        }
        
        &.error {
            border-color: ${({theme}) => theme.colors.light.brown};
            border-width: 2px;
        }
    }
`
export const NewPassword = styled.label`
    max-width: 543px;
    width: 100%;
    position: relative;


    svg {
        position: absolute;
        top: 4.5rem;
        right: 1.5rem;
        cursor: pointer;
    }
`
export const RetypePassword = styled.label`
    max-width: 543px;
    width: 100%;
    position: relative;


    svg {
        position: absolute;
        top: 4.5rem;
        right: 1.5rem;
        cursor: pointer;
    }
`