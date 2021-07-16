import React,{useState} from 'react'
import Video from '../../videos/video-1.mp4'
import { HeroContainer,HeroBg,
    VideoBg,HeroContent,Heroh1,
    HeroP,ArrowForward,ArrowRight,
    HerobtnWrapper } 
    from './HeroElement'
import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover);
    }

    return (
            <HeroContainer>
                <HeroBg>
                  <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
                </HeroBg>
                <HeroContent>
                    <Heroh1>Welcome to the Placement Cell</Heroh1>
                    <HeroP>
                        Sign up to our page 
                        and I hope you would like it. 
                    </HeroP>
                    <HerobtnWrapper>
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                            Get started {hover? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HerobtnWrapper>
                </HeroContent>
            </HeroContainer>  
    )
}
export default HeroSection;