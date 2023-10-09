import {styled, keyframes} from 'styled-components'

export const LoginSection = styled.section`
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
export const LoginContainer = styled.div`
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
export const LoginForm = styled.form`
    background: white;
    padding: 8rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

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

    .activate {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.neutral.blue};
        cursor: pointer;
    }

`
export const Username = styled.label`
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
export const ErrorMessage = styled.div`
    max-width: 543px;
    width: 100%;
    background: ${({theme}) => theme.colors.light.yellow1};
    color: ${({theme}) => theme.colors.neutral.black1};
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
`