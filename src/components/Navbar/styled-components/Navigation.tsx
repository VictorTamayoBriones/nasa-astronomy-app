import styled from 'styled-components';
import { theme } from '../../../theme';

interface Props{
    menuIsOpen: boolean
}

export const NavigationBar = styled.nav<Props>`
    width: 100%;
    background: ${theme.azulOscuro};
    padding: 8px;
    display: flex;
    gap: 30px;
    align-items: center;
    color: #fff;
    svg{
        display: none;
        position: absolute;
        top: 2.5%;
        right: 2%;
        z-index: 2;
    }
    section{
        /* width: 20%; */
        display: flex;
        align-items: center;
        gap: 10px;
        img{
            width: 50px;
            height: 50px;
        }
    }
    ul{
        list-style: none;
        display: flex;
        li{
            &:first-child{
                a{

                    &:hover{
                        border-radius: 5px 0 0 5px;
                        background: #fff;
                        color: ${theme.azulOscuro};
                    }
                }
            }
            &:last-child{
                a{

                    &:hover{
                        border-radius: 0 5px 5px 0;
                        background: #fff;
                        color: ${theme.azulOscuro};
                    }
                }
            }
            a{
                width: 100%;
                padding: 5px 12px;
                color: #fff;
                text-decoration: none;
                cursor: pointer;
                transition: .3s all;
                &:hover{
                    background: #fff;
                    color: ${theme.azulOscuro};
                }
            }
        }
    }

    @media(max-width: 674px){
        svg{
            display: block;
            width: 40px;
            height: 40px;
        }
        ul{
            height: ${(props)=>props.menuIsOpen ? '200px' : '0'};
            overflow: hidden;
            background: ${theme.azulOscuro};
            flex-direction: column;
            position: absolute;
            top: 0;
            right: 0;
            gap: 8px;
            transition: .5s ease-out all;
            z-index: 1;
            border-radius: 0 0 0 5px;
            border-left: solid 1px ${(props)=>props.menuIsOpen ? '#fff' : theme.azulOscuro};
            border-bottom: solid 1px ${(props)=>props.menuIsOpen ? '#fff' : theme.azulOscuro};
            box-shadow: 0 0 9px 2px ${(props)=>props.menuIsOpen ? '#00000055' : 'transparent'};
            li{
                padding: 12px 0;
                &:first-child, &:last-child{
                    a{
                        &:hover{
                            border-radius: 0;
                        }
                    }
                }
            }
            
        }
    } 

    @media(max-width: 300px){
        section{
            h2{
                font-size: 22px;
            }
        }
        svg{
            width: 35px;
            height: 35px;
        }
    }
`;