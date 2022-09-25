import styled from 'styled-components';

export const ApodImageContainer=styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;

    @media(max-width: 700px){
        width: 100%;
    }
`;

export const ApodImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;