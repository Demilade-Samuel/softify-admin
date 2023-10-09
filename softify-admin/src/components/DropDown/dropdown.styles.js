import { styled } from 'styled-components';
import { NavLink} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-transform: capitalize;
    background: ${({isopen, theme}) => isopen === 'true' ? theme.colors.bg.blue1 : 'transparent'};
    border: 1px solid transparent;

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    span svg path {
        fill: ${({isopen, theme }) => isopen === 'true' ? theme.colors.neutral.blue : '' };
    }

    &:hover {
        border-color: ${({theme}) => theme.colors.hover.blue};
    }
    &.disabled {
        background: transparent !important;
        p {
            color: ${({theme}) => theme.colors.light.purple};
        }
        span svg path {
            fill: ${({theme}) => theme.colors.light.purple};
        }
        svg path {
            stroke: ${({theme}) => theme.colors.light.purple};
        }
        &:hover {
            border-color: transparent;
        }
    }
`

export const Links = styled.div`
    display: ${({isopen}) => isopen === 'true' ? 'flex' : 'none'};
    flex-direction: column;
    padding-top: 0.5rem;


    &.disabled {
        display: none !important;
    }

`
export const Link = styled(NavLink)`
    padding: 1rem;
    padding-left: 4.5rem;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 1.5rem;
    width: 100%;
    border: 1px solid transparent;

    &.active {
        color: ${({theme}) => theme.colors.neutral.blue};
    }
    &:hover {
        border-color: ${({theme}) => theme.colors.hover.blue};
    }
`