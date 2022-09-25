import styled from 'styled-components';
import { theme } from '../../../../../theme';

export const Card = styled.div`
    width: 30%;
    height: max-content;
    max-height: 800px;
    overflow: hidden;
    border-radius: 5px;
    background: ${theme.azulOscuro};
    margin-bottom: 20px;
`;