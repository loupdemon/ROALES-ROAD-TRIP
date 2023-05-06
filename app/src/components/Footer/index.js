
import {animateScroll as scroll} from 'react-scroll'
//import { Link } from 'react-router'
import {FaFacebook,/*FaInstagram,*/ FaTwitter, FaLinkedin} from 'react-icons/fa'
//////
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  Copyright,
  Author,
  SocialIconLink,
  FooterLinkExt,
  SocialIconWrap

} from './FooterStyles'

const Footer = () => {

  
  const toogleTop = () => {
    scroll.scrollToTop();
  }
 

  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Qui sommes-nous?</FooterLinkTitle>
                  <FooterLinkExt href="https://drive.google.com/file/d/1-tDM86iv-mIDkuYYf1Bslmo4Cc6hNMQQ/view?usp=sharing" target="_blank" rel="noreferrer">À propos</FooterLinkExt>
                  <FooterLinkExt href="https://www.amf-france.org/sites/default/files/pdf/60715/fr/Qu%27est-ce%20qu%27une%20%3C%3C%20cryptomonnaie%20%3E%3E%20.pdf?1585060819" target="_blank" rel="noreferrer">Brochure</FooterLinkExt>
                  <FooterLinkExt href="/" target="_blank" rel="noreferrer">FAC</FooterLinkExt>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle> Mentions</FooterLinkTitle>
                  <FooterLink to='mentions'>Conditions générales d'utilisation.</FooterLink>
                  <FooterLink to='spot'>Presentation</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>Coordonnées</FooterLinkTitle>
                  <FooterLink to='contact'>Contact</FooterLink>
                  <FooterLinkExt href="https://goo.gl/maps/AiRHbx53RoYaJAS19" target="_blank" rel="noreferrer">Siège </FooterLinkExt>
                  <FooterLink to='signin'></FooterLink>
              </FooterLinkItems>
              
              <FooterLinkItems>
                <FooterLinkTitle> Réseaux sociaux</FooterLinkTitle>
                 <SocialIconWrap>
                  <SocialIconLink href="https://bitcoin.org/fr/" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
                  <SocialIconLink href="https://bitcoin.org/fr/" target="_blank" noreferrer aria-label="Twitter">
                    <FaTwitter/>
                  </SocialIconLink>
                  <SocialIconLink href="https://bitcoin.org/fr/" target="_blank" noreferrer aria-label="Facebook">
                    <FaFacebook/>
                  </SocialIconLink>
                  </SocialIconWrap>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toogleTop}>CRYPTOZE</SocialLogo>
                <Copyright>- &copy; {new Date().getFullYear()}Tous droits resevés </Copyright>
                <Author  href="https://github.com/EpitechMscProPromo2023/T-WEB-700-T-WEB-700_msc2023_group-43" target="_blank" rel="noreferrer">Conception</Author>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  )
}

export default Footer
