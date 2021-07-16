import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa' 
import {IconContext} from 'react-icons/lib' 
import {Nav,NavLogo,NavbarContainer
    ,NavItem,NavLinks,NavMenu
    ,MobileIcons,NavBtn,NavbtnLink, active} 
    from './NavbarElements'
import {animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {

    const[scrollNav,setscrollNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY>=80){
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{color:'#01bf71'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>DKapadiA</NavLogo>
                    <MobileIcons onClick={toggle}>
                        <FaBars/>
                    </MobileIcons>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavbtnLink to="/signin">Sign In</NavbtnLink>
                    </NavBtn>  
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>     
        </>
    );
};

export default Navbar;
