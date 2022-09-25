import styled from 'styled-components';
import { theme } from '../../../theme';

export const ApodContainer = styled.section`
    width: 90%;
    height: 80vh;
    background: ${ theme.azulOscuro };
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    justify-content: space-between;
    box-shadow: 10px 10px 10px #00000050;
    margin: 20px 0;

    @media(max-width: 700px){
        width: 95%;
        height: auto;
        flex-direction: column;
    }
`;