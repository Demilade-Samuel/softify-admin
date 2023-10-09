import {styled, keyframes} from 'styled-components';

export const AddCategorySection = styled.section`
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