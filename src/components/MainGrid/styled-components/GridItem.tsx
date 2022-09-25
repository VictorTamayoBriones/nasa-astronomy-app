import styled from 'styled-components';

interface Props{
    image: string,
    width: string
}

export const Description=styled.section`
    width: 100%;
    margin-top: 5px;
    height: 0;
    overflow: hidden;
    transition: .5s ease all;
    p{
        letter-spacing: 1px;
        line-height: 22px;
    }
`;

export const GridItem = styled.div<Props>`
    width: ${(props)=>{
        if(props.width == '50'){
            return '50%'
        }
        if(props.width === '100'){
            return '100%'
        }
    }};
    height: 250px;
    background-image: url(${(props)=>props.image});
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
    transition: .5s ease all;
    &:hover{
        ${Description}{
            height: 205px;
        }
    }
`;

export const GridItemBody = styled.footer`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #00000080;
    padding: 5px;
    transition: .5s ease all;
    pointer-events: none;
`;

