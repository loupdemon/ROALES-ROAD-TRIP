import Icon1 from '../../assets/images/catalogue.gif'
import Icon2 from '../../assets/images/catalogue.gif'
import Icon3 from '../../assets/images/catalogue.gif'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesStyled'
/////
const News = () => {
  return (
    <div>
      <ServicesContainer id="News">
        <ServicesH1>Nouveautés</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} alt=''/>
            <ServicesH2>cours</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidut</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>cours</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidut.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>cours</ServicesH2>
            <ServicesP>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidut</ServicesP>
          </ServicesCard>
          

        </ServicesWrapper>
      </ServicesContainer>
      
    </div>
  )
}

export default News
