import styled from 'styled-components';

export const ApodData = styled.div`
    width: 50%;
    padding: 10px 20px;
    overflow: scroll;

    h2{
        margin-bottom: 5px;
    }

    span{
        display: block;
        margin-bottom: 12px;
        color: #ccc;
    }

    p{
        letter-spacing: 1px;
        line-height: 22px;
        font-size: 20px;
    }

    @media(max-width: 700px){
        width: 100%;
    }
`;