import './style.scss';
import {
  Link
} from "react-router-dom";
import React from 'react';


// Import Header & Footer
import Header from '../../../components/header/index'

// Import Image
import IconFavoris from '../../../assets/IconFavoris.png'
import IconStatistics from '../../../assets/IconStatistics.png'
import IconList from '../../../assets/IconList.png'

import LineChart from '../../../components/charts/line/index'
const axios = require('axios');

class Stats extends React.Component {
  constructor(props) {
    document.title = "Stats"
    super(props);
    this.state = { crypto: {}, displayChart: null }
    this.getCrypto("bitcoin")
  }

  getCrypto(cryptoName) {
    
    axios.get(`http://localhost:8800/api/v1/cryptos/${cryptoName}`)
    .then(res => {
        this.setState({ displayChart: null })
        this.setState({ crypto: res.data[0] })
        this.setState({ displayChart: <LineChart crypto={this.state?.crypto} />})
      }).catch(function (error) {
        console.log(error)
      });
  }

  // displayChart() {
  //   return this.state?.crypto ? <LineChart crypto={this.state?.crypto} /> : ''
  // }

  render() {
    return (
      <>
        <Header crypto={this.state.crypto} onChangeCrypto={(value) => this.getCrypto(value)} />
        <div className="view-dash">
          <div className="view-dash-left">
            <Link to="../"><div className="view-dash-left-menu">
              <img src={IconStatistics} alt="Statistics" />
            </div></Link>
            <Link to="../list"><div className="view-dash-left-menu">
              <img src={IconList} alt="List" />
            </div></Link>
            <Link to="../favoris"><div className="view-dash-left-menu">
              <img src={IconFavoris} alt="Favoris" />
            </div></Link>
          </div>
          <div className="view-dash-right">
            <div className="view-dash-right-top">
              <div className="view-dash-right-top-left">
                <li onClick={this.getCrypto}>APERCU</li>
              </div>
              <div className="view-dash-right-top-right">
                <li>Nouvelle</li>
                <li>Ordre</li>
                <li>Positions</li>
              </div>
            </div>
            <div className="view-dash-right-main">
              <h3>Statistique : {this.state.crypto?.name}</h3>
              <div className="view-dash-right-main-Info">
                <div className='view-dash-right-main-Info-left'>
                  <img src={this?.state.crypto?.logo} alt='crypto' />
                </div>
                <div className='view-dash-right-main-Info-right'>
                  {this.state.displayChart}
                </div>
              </div>
              <div className="view-dash-right-main-Info-bottom">
                <div className="Info-Item">
                  <li>Prix</li>
                  <li>{this.state.crypto?.price_data?.price_current} €</li>
                </div>

                <div className="Info-Item">
                  <li>Volume</li>
                  <li>3.716</li>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Stats