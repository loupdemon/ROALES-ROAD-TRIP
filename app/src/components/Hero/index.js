
import React /*, { useState }*/ from 'react'
import video from '../../assets/video/video.mp4'
import Icon1 from '../../assets/images/mouse.png'
import {animateScroll as scroll} from 'react-scroll'
// import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroBtn,
  NavHeroLink ,
  // ArrowForward,
  // ArrowRight,
  HeroIcon
} from './HeroStyles'

const toogleTop = () => {
  scroll.scrollToTop();
}

const Hero = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = ()=> setHover(!hover);
  return (
    <div>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg src={video} autoPlay muted playsInline loop/>
        </HeroBg>
        <HeroContent>
          <HeroTitle>CRYPTOZE</HeroTitle>
          <HeroText>
          Le compte de l'argent, restez informé et battez les pièces
          </HeroText>
          <HeroBtn>
          <HeroIcon to="About" onClick={toogleTop} src={Icon1} alt=''/><NavHeroLink to="About"></NavHeroLink>
            {/* <Button primary dark to="spot" onMouseEnter={onHover} onMouseLeave={onHover}>
            <HeroIcon src={Icon1} alt=''/>
              {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button> */}
          </HeroBtn>
        </HeroContent>

      </HeroContainer>
      
    </div>
  )
}

export default Hero
