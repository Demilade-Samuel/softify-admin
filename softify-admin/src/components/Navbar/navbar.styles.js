import {styled} from 'styled-components';
import {NavLink} from 'react-router-dom'

export const NavbarSection = styled.nav`
    border-right: 1px solid ${({theme}) => theme.colors.light.gray2};
    width: 18vw;
    overflow: hidden;
`
export const Container = styled.div`
    padding: 2rem;
`
export const NavLinks = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({theme}) => theme.colors.neutral.black2};
    font-weight: 400;

    button {
        background: ${({theme}) => theme.colors.bg.gray1};
        padding: 1rem;
        border-radius: 5px;
        text-align: left;
        display: flex; 
        align-items: center;
        gap: 1rem;
        color: ${({theme}) => theme.colors.neutral.black2};
        font-weight: 400;
        border: 1px solid transparent;

        &:hover {
            border-color: ${({theme}) => theme.colors.hover.blue};
        }
    }
`
export const Link = styled(NavLink)`
    background: transparent;
    padding: 1rem;
    border-radius: 5px;
    display: flex; 
    align-items: center;
    gap: 1rem;
    border: 1px solid transparent;

    svg path {

        &.active {
            fill: ${({theme}) => theme.colors.neutral.blue}; 
        }
    }

    &.active {
        background: ${({theme}) => theme.colors.bg.blue};
        color: ${({theme}) => theme.colors.neutral.blue};
    }
    &:hover {
        border-color: ${({theme}) => theme.colors.hover.blue};
    }
`