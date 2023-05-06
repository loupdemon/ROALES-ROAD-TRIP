import {
  OffresContainer,
  OffresH1,
  OffresWrapper,
  OffresCard,
  OffresIcon,
  OffresH2,
  OffresP,
  OffresChiffre,
  OffresAchat,
  OffresVente
} from './OffresStyled'
import axios from 'axios'
import React from 'react';


/////////////////////////////
class Market extends React.Component {
  constructor(props) {
    document.title = "Market"
    super(props);
    this.state = { cryptos: [] };
    this.getCryptos()
  }
  getCryptos() {
    axios.get(`http://localhost:8800/api/v1/cryptos/all`)
      .then(res => {
        console.log(res);
        this.setState({ cryptos: res.data });
      }).catch(function (error) {
        console.log(error)
      });
  }
  render() {
    const items = []
    
    for (const [index, value] of this.state.cryptos.entries()) {
      items.push(
        <OffresCard>
          <OffresIcon src={value?.logo} alt='' />
          <OffresH2>{value?.name}</OffresH2>
          <OffresP>Prix actuel <OffresChiffre>{value?.price_data.price_current}€</OffresChiffre></OffresP>
          <OffresP>Prix bas sur 24h<OffresVente>{value?.price_data.price_low}€</OffresVente></OffresP>
          <OffresP>Prix haut sur 24h<OffresAchat>{value?.price_data.price_high}€</OffresAchat></OffresP>
        </OffresCard>)
    }
    return (
      <div>
        <OffresContainer id="marcket">
          <OffresH1>Le marché</OffresH1>
          <OffresWrapper>
            {items}
          </OffresWrapper>
        </OffresContainer>

      </div>
    )
  }
}

export default Market
