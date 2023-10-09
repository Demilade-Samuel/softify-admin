import styled from 'styled-components'

export const ForgetPasswordSection = styled.section`
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    display: grid;
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
`
export const ForgetPasswordContainer = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    background: white;
    padding: 12rem 3rem;

    h2 {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 600;
    }
`
export const ForgetPasswordForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;

    button {
        max-width: 543px;
        width: 100%;
        height: 44px;
    }
    
    input {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black5};
        height: 44px;
        width: 100%;
        border-radius: 3px;
        padding-left: 1rem;
        background: ${({theme}) => theme.colors.light.gray3};
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};
        margin-top: 1rem;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }
    }

    .back {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({theme}) => theme.colors.neutral.blue};
        cursor: pointer;
        margin-top: 4rem;

        &:hover {
            text-decoration: underline;
        }
    }

`
export const Email = styled.label`
    max-width: 543px;
    width: 100%;
`
export const OtpContainer = styled.div`
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    background: white;
    padding: 16rem 3rem;

    h2 {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 600;
    }
    p {
        text-align: center;
    }
`
export const OtpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 6rem;

    button {
        max-width: 543px;
        width: 100%;
        height: 44px;
    }
    
    input {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.neutral.black5};
        height: 44px;
        width: 100%;
        border-radius: 3px;
        padding-left: 1rem;
        background: ${({theme}) => theme.colors.light.gray3};
        border: 1px solid ${({theme}) => theme.colors.bg.gray6};

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${({theme}) => theme.colors.dark.gray};
        }
    }
`
export const Otp = styled.label`
    max-width: 543px;
    width: 100%;
`
export const Sucessful = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    background: white;
    padding: 14rem 3rem;

    h2 {
        text-align: center;
        font-size: 2.8rem;
        font-weight: 600;
    }
    p {
        text-align: center;
    }
    a {
        max-width: 543px;
        width: 100%;
        margin: 0 auto;
        margin-top: 4rem;
    }

    button {
        width: 100%;
        height: 44px;
    }
`