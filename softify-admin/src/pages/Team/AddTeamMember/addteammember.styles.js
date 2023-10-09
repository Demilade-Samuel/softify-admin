import styled from 'styled-components';

export const AddTeamMemberSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`

export const Container = styled.div`
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};
    padding: 3rem;

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
    }
`
export const AddTeamMemberForm = styled.form`
`
export const Inputs = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`
export const GirdThree = styled.div`
    display: grid;
    grid-template-columns: 80px 1fr 1fr;
    gap: 1rem;
`
export const GridTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    p {
        font-size: 1.1rem;
        color: ${({theme}) => theme.colors.neutral.blue};
        cursor: pointer;
    }
`
export const Buttons = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 15rem;
`
export const Cancel = styled.button`
    height: 35px;
    border-radius: 5px;
    background:  ${({theme}) => theme.colors.bg.gray3};
    color: ${({theme}) => theme.colors.neutral.black2};
    text-transform: capitalize;
    font-weight: 500;
    max-width: 110px;
    width: 100%;
`