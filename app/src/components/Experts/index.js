import Icon1 from '../../assets/images/bender.gif'
import Icon2 from '../../assets/images/leila.gif'
import Icon3 from '../../assets/images/philip.gif'
import {/*FaFacebook, FaInstagram, FaTwitter,*/ FaLinkedin} from 'react-icons/fa'
import {
    RessourcesContainer,
    RessourcesH1,
    RessourcesWrapper,
    RessourcesCard,
    RessourcesIcon,
    RessourcesH2,
    RessourcesP,
    SocialIconLink
} from './RessourcesStyled'

const Experts = () => {
  return (
    <div>
      <RessourcesContainer id="Experts">
        <RessourcesH1>Nos Experts</RessourcesH1>
        <RessourcesWrapper>
          <RessourcesCard>
            <RessourcesIcon src={Icon1} alt=''/>
            <RessourcesH2>Bender Tordeur Rodríguez</RessourcesH2>
            <RessourcesP>Spécialiste en Litecoin</RessourcesP>
                  <SocialIconLink href="https://fr.wikipedia.org/wiki/Bender_Tordeur_Rodr%C3%ADguez" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          <RessourcesCard>
            <RessourcesIcon src={Icon2}/>
            <RessourcesH2>Turanga Leela</RessourcesH2>
            <RessourcesP>Spécialiste en Dogecoin</RessourcesP>
                  <SocialIconLink href="https://fr.wikipedia.org/wiki/Turanga_Leela" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          <RessourcesCard>
            <RessourcesIcon src={Icon3}/>
            <RessourcesH2>Philip J. Fry</RessourcesH2>
            <RessourcesP>Spécialiste en Bitcoin</RessourcesP>
                  <SocialIconLink href="https://fr.wikipedia.org/wiki/Philip_J._Fry" target="_blank" noreferrer aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
          </RessourcesCard>
          

        </RessourcesWrapper>
      </RessourcesContainer>
      
    </div>
  )
}

export default Experts
