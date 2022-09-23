import styled from 'styled-components';
import { theme } from '../../../theme';

export const NavigationBar = styled.nav`
    width: 100%;
    background: ${theme.azulOscuro};
    padding: 8px;
    display: flex;
    gap: 30px;
    align-items: center;
    color: #fff;
    section{
        width: 20%;
        display: flex;
        align-items: center;
        gap: 10px;
        img{
            width: 50px;
            height: 50px;
        }
    }
    ul{
        width: 80%;
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
                transition: .5s all;
                &:hover{
                    background: #fff;
                    color: ${theme.azulOscuro};
                }
            }
        }
    }
`;