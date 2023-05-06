import Icon1 from '../../assets/images/logo.svg'
import React, {useState, useEffect} from 'react';
import {BiMenuAltRight, BiX} from 'react-icons/bi'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import {
  Nav,
  NavContainer,
  // NavLogo,
  NavIcon,
  NavWrapper,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  NavbarIcon
} from './NavbarStyles'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  const closeMenu = ()=> setClick(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = ()=>{
    if(window.scrollY >= 80) {
      setScrollNav(true);
    }else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toogleTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div>
      <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
          {/* <NavLogo to="/" onClick={toogleTop}> CRYPTOZE</NavLogo> */}
          <NavbarIcon to="/" onClick={toogleTop} src={Icon1} alt=''/>
          <NavIcon onClick={handleClick}>
            {click ? <BiX/> : <BiMenuAltRight/> }
          </NavIcon>
          
            <NavMenu onClick={handleClick} click={click}>
              <NavWrapper>
                <NavItem>
                  <NavLink 
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  
                  onClick={closeMenu} to="About">Accueil</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="marcket">Marché</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="News">Nouveauté</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                   onClick={closeMenu} to="Experts">Nos Experts</NavLink>
                </NavItem>
              </NavWrapper>
                <NavBtn>
                  <NavBtnLink onClick={closeMenu} to="login">Se connecter</NavBtnLink>
                </NavBtn>
            </NavMenu>
    
        
        </NavContainer>
      </Nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
