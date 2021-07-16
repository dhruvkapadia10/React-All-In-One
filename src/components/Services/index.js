import React from 'react'
import { ServiceContainer,ServiceWrapper,
    ServiceIcon,Servicecard,
    ServiceP,Serviceh1,
    Serviceh2 } from './ServiceElement'
import icon1 from "../../images/svg-4.svg";
import icon2 from "../../images/svg-5.svg";
import icon3 from "../../images/svg-6.svg";

const Services = () => {
    return (
        <>
            <ServiceContainer id="services">
                <Serviceh1>Our Services</Serviceh1>
                    <ServiceWrapper>
                        <Servicecard>
                            <ServiceIcon src={icon1}/>
                            <Serviceh2 >Reduce expances</Serviceh2>
                            <ServiceP>we help you to increase 
                                revenue and reduce fees</ServiceP>
                        </Servicecard>
                        <Servicecard>
                        <ServiceIcon src={icon2}/>
                            <Serviceh2 >Virtual offices</Serviceh2>
                            <ServiceP>You can access it 
                                from anywhere in the world</ServiceP>
                        </Servicecard>
                        <Servicecard>
                        <ServiceIcon src={icon3}/>
                            <Serviceh2 >Premium benefits</Serviceh2>
                            <ServiceP>Unlock our special memnership that will 
                                give you 5% cash back</ServiceP>
                        </Servicecard>
                    </ServiceWrapper>  
            </ServiceContainer>  
        </>
    )
}

export default Services
