import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR}  from 'react-router-dom'

export const SidebarContainer=styled.aside`
    position:fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background:#221f1f;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen})=> (isOpen ? '100%': '0')};
    top:${({isOpen})=>(isOpen?'0':'-100%')};
`

export const CloseIcon= styled(FaTimes)`
    color:white;
`
export const Icon=styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`
export const SidebarWrapper=styled.div`
    color:white;
`

export const SidebarLink=styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    list-style:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:white;
    cursor: pointer;

    &:hover{
        color:#01bf71;
        transition:0.5s ease-in-out;
    }
`

export const SidebarWrap=styled.div`
    display:flex;
    justify-content:center;
`

export const SidebarRoute=styled(LinkR)`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    margin:16px 64px;
    padding:10px 30px;
    color:white;
    outline:none;
    font-size: 1.5rem;
    cursor: pointer;
    border:none;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:white;
        color:#01bf71;
    }   
`
export const SidebarMenu=styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(5,80px);
    text-align:center;

    @media screen and (max-width:480px){
        grid-template-rows:repeat(5,60px);
    }
`
export const SidebtnWrap=styled.div`
    display:flex;
    justify-content:center;
`