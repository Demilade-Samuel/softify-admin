import {styled, keyframes} from 'styled-components';

export const CategoriesSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    display: flex;
    align-items: start;
`
export const Left = styled.div`
    display: inline-block;
    border: 1px solid ${({theme}) => theme.colors.light.purple};
    border-radius: 8px 0px 0px 8px;
    padding: 2rem;
`
export const Top = styled.div`
    display: flex;
    gap: 19rem;

    p {
        font-size: 2rem;
        font-weight: 600;
    }
`
export const Line = styled.div`
    width: 100%;
    height: 2px;
    background: ${({theme}) => theme.colors.light.gray2};
    margin: 2rem 0;

`
export const List = styled.div`

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${({theme}) => theme.colors.neutral.black3};
        padding: 1rem;
        cursor: pointer;
        border: 1px solid transparent;

        p {
            font-weight: 500;
            text-transform: capitalize;
        }

        svg {
            cursor: pointer;
        }

        &.selected {
            background: ${({theme}) => theme.colors.bg.lightPink};
            border-left: 5px solid ${({theme}) => theme.colors.light.pink};
        }
        &:hover {
            border-color: ${({theme}) => theme.colors.hover.pink};
        }
    }

`
export const Right = styled.div`
    width: auto;
    border: 1px solid ${({theme}) => theme.colors.light.purple};
    border-radius: 0px 8px 8px 0px;
    padding: 2rem;
`
export const Items = styled.div`
    margin-top: 1rem;
    max-height: 250px;
    overflow: auto;

    p {
        padding: 1rem;
        text-transform: capitalize;
        font-weight: 500;
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
export const Loading = styled.div`
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

    svg {
        animation: ${roll} 1s infinite linear;
    }
`
export const Error = styled.div`
    padding: 4rem 0;
    text-align: center;

    p {
        color: ${({theme}) => theme.colors.neutral.red}
    }
`