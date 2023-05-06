import './style.scss';
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import React from 'react';

// Import Header & Footer
import Header from '../../../components/header/index'

// Import Image
import IconFavoris from '../../../assets/IconFavoris.png'
import IconStatistics from '../../../assets/IconStatistics.png'
import IconList from '../../../assets/IconList.png'


class List extends React.Component {
  constructor(props) {
    document.title = "List"
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
  addToFavorites(value) {
    console.log(value);
    var fav = JSON.parse(sessionStorage.getItem('user')).Favorites;
    fav?.push(value.toLowerCase());
    console.log(fav);
      axios.post('http://localhost:8800/api/v1/user/favoris', {
        "Favorites": fav
      }, { 
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`, 
          'Content-Type': 'application/json',
        }
      }).then(res => {
        console.log(res);
        sessionStorage.setItem('user', JSON.stringify(res.data));
      }).catch(function (error) {
        console.log(error)
      });;
  }
  render() {
    const items = []

    for (const [index, value] of this.state.cryptos.entries()) {
      items.push(
        <div className='ItemFavoris'>
          <img src={value?.logo} alt="crypto" />
          <li>{value?.symbol.toUpperCase()}/EUR</li>
          <li>Valeur : {value?.price_data.price_current}€</li>
          <li>Voir</li>
          <li onClick={() => this.addToFavorites(value?.id)}>Add</li>
        </div>
      )
    }
    return (
      <>
        <Header />
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
                <li>APERCU</li>
              </div>
              <div className="view-dash-right-top-right">
                <li>Nouvelle</li>
                <li>Ordre</li>
                <li>Positions</li>
              </div>
            </div>
            <div className="view-dash-right-main">
              <h3>List Crypto</h3>
              <div className='view-dash-right-main-Content'>
                {/* List des Crypto qu'on peux ajouter dans c'est favoris */}
                {items}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default List