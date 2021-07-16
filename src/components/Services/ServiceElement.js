import styled from 'styled-components';

export const ServiceContainer =styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width:768px){
        height: 1150px;
    }
    @media screen and (max-width:480px){
        height: 1230px;
    }
`

export const ServiceWrapper =styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    padding: 0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const Servicecard=styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ServiceIcon=styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const Serviceh1=styled.h1`
    font-size:2.5rem;
    color:#fff;
    margin-top: -259px;
    margin-bottom: 63px;

    @media screen and (max-width:1000px){
        font-size: 3.5rem;
        margin-top: 46px;
    }

    @media screen and (max-width:768px){
        font-size: 3rem;
        margin-top: 80px;
    }
    @media screen and (max-width:480px){
        font-size: 2.5rem;
        margin-top: 121px;
    }
`
export const Serviceh2=styled.h1`
    font-size:1rem;
    margin-bottom: 10px;
`
export const ServiceP=styled.p`
    font-size: 1rem;
    text-align:center;
`