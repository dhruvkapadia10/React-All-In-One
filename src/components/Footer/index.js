import React from 'react'
import { FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,
FooterLinkItems,FooterLinkTitle,FooterLink,
SocialLogo,SocialMedia,SocialMediaWrap,
SocialIcons,SocialIconLink,WebsiteRights } from './FooterElement'
import {FaFacebook,FaTwitter,FaLinkedin,FaYoutube,FaInstagram} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const toggleHome=()=>{
    scroll.scrollToTop();
}

const Footer = () => {
    return (

        

        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                                <FooterLink to="/signin">How it works</FooterLink>
                                <FooterLink to="/testimonial">Testimonials</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                                <FooterLink to="/">Submit videos</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                                {/* <FooterLink to="/signin">Terms of Service</FooterLink> */}
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                                <FooterLink to="/">Contant</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                                {/* <FooterLink to="/signin">Terms of Service</FooterLink> */}
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                {/* <FooterLink to="/signin">Terms of Service</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            DKapadiA</SocialLogo>
                        <WebsiteRights>D.k Ⓒ {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/dhruv.kapadia.77/" target="_blank"
                            aria-lable="facebook"><FaFacebook/></SocialIconLink>
                        
                            <SocialIconLink href="//www.instagram.com/dhruv.kapadia10/" target="_blank"
                            aria-lable="instagram"><FaInstagram/></SocialIconLink>
                        
                            <SocialIconLink href="//www.youtube.com/channel/UClPpBELvp0_XQ5YI8BN8Tog" target="_blank"
                            aria-lable="youtube"><FaYoutube/></SocialIconLink>
                        
                            <SocialIconLink href="//www.twitter.com/DhruvKapadia19" target="_blank"
                            aria-lable="twitter"><FaTwitter/></SocialIconLink>
                        
                            <SocialIconLink href="//www.linkedin.com/in/dhruv-kapadia-b73673193/" target="_blank"
                            aria-lable="linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>

                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
