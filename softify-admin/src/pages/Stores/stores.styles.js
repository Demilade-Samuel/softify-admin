import {styled} from 'styled-components';

export const StoreSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
`
export const Statuses = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    padding: 0.5rem 0.8rem;
    display: inline-flex;

`
export const Status = styled.span`
    padding: 0.5rem 1.5rem;
    color: ${({theme, active}) => active ? theme.colors.neutral.purple : theme.colors.light.gray1};
    background: ${({theme, active}) => active ? theme.colors.bg.purple : 'transparent'};
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
`
export const Left = styled.div`

    p {
        font-size: 2.4rem;
        font-weight: 600;
        color: ${({theme}) => theme.colors.neutral.black2};
    }
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`