import { styled } from 'styled-components';

export const Header= styled.header`
    width: 100%;
    border-bottom: 1px solid ${({theme}) => theme.colors.light.gray2};
`
export const Container = styled.div`
    padding: 2rem 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.span`
    font-size: 2.1rem;
    font-weight: 700;
    text-transform: capitalize;
    color: ${({theme}) => theme.colors.neutral.black2};
`
export const Right = styled.div`
    display: flex;
    gap: 3rem;
    align-items: center;
`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`
export const Details = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 1.2rem;
            text-transform: capitalize;
        }
    }
`