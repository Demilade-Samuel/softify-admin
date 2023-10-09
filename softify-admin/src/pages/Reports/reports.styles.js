import styled from "styled-components";

export const ReportsSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
`
export const Container = styled.div`
    padding: 2rem 3rem;
    background: ${({theme}) => theme.colors.bg.gray1};
    color: ${({theme}) => theme.colors.neutral.black2};
`
export const ReportsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Report = styled.div`
    font-weight: 500;
    border: 1px solid ${({theme}) => theme.colors.bg.gray5};
`
export const Head = styled.div`
    background: ${({theme}) => theme.colors.bg.gray5};
    padding: 1rem;
`
export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;

    p {
        padding: 0rem 2rem;
        color: ${({theme}) => theme.colors.neutral.blue};
        cursor: pointer;
    }

`