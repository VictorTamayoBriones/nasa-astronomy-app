import styled from 'styled-components';

export const Grid = styled.section`
    width: 80%;
    background: #ccc;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 700px){
        width: 95%;
    }
`;

export const MainGridContainer = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: 700px){
        margin-top: 20px;
        align-items: flex-start;
    }
`;