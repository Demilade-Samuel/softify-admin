import {styled} from 'styled-components'

export const MgmtSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Left = styled.div`
    background: ${({theme}) => theme.colors.bg.gray3};
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0.5rem 2rem;
    border: 1px solid ${({theme}) => theme.colors.bg.gray3};

    p {
        text-transform: capitalize;
        font-size: 2rem;
        font-weight: 500;
        cursor: pointer;
        color: ${({theme}) => theme.colors.light.gray1};

        &.tab-active {
            color: ${({theme}) => theme.colors.neutral.purple};
            text-decoration: underline;
            text-decoration-color: ${({theme}) => theme.colors.neutral.purple};
        }
    }
`
export const Right = styled.div`

`
export const EmptyState = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
    }
`