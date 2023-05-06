import './style.scss';
import React from 'react';
import $ from 'jquery';
import {
  Link
} from "react-router-dom";

// Get Date && Time ps Manque l'actualisation
let Now = new Date();
let time = Now.getHours() + "h " + Now.getMinutes() + "m";
let date = Now.getDate() + '-' + (Now.getMonth() + 1) + '-' + Now.getFullYear();



$(document).ready(function () {
  // View && Hiden Nav Profil
  $(".header-top-right-info-user, .Open-NavInfoHidden, .NavInfoHidden").mouseover(function () {
    $(".NavInfoHidden").css('display', 'flex');
  });

  $(".header-top-right-info-user, .Open-NavInfoHidden, .NavInfoHidden").mouseout(function () {
    $(".NavInfoHidden").css('display', 'none');
  });

  // View && Hiden Nav Crypto
  // $(".header-top-right-info-user, .Open-NavInfoHidden, .NavInfoHidden").mouseover(function(){
  //   $(".NavInfoHidden").css('display','flex'); 
  // });

  // $(".header-top-right-info-user, .Open-NavInfoHidden, .NavInfoHidden").mouseout(function(){
  //   $(".NavInfoHidden").css('display','none'); 
  // });


});

class Header extends React.Component {
  constructor(props) {
    document.title = "Header";
    super(props);
  }
  changeCrypto = (e) => {
    this.props.onChangeCrypto(e.target.value)
  }
  logout = (e) => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
  render() {
    const crypto = this.props.crypto;
    const user = JSON.parse(sessionStorage.getItem('user'));
    var items = [];
    if (user.Favorites){
      for (let index = 0; index < user.Favorites.length; index++) {
        const element = user.Favorites[index];
        items.push(<option value={element}>{element}</option>)
      }
      // for (const [index, value] of user?.Favorites?.entries()) {
      //   items.push(
      //     <option value={value}>{value}</option>)
      // }
    }
    return (
      <>
        <div className="view-header">
          <div className="header-top">
            <div className="header-top-left">
              <Link to='/dash'><h1>CRYPTOZE</h1></Link>
            </div>
            <div className="header-top-right">
              <div className="header-top-right-nav">
                <Link to='/dash'><li>Dashboard</li></Link>
                <Link to='/'><li>Nouveautés</li></Link>
                <Link to='../admin'><li>Administration</li></Link>
                {/* <img src={UserIcon} alt="User Icon"/> */}
              </div>
              <div className="header-top-right-info">
                <div className="header-top-right-info-user">
                  <li className="Open-NavInfoHidden">{user?.FirstName + " " + user?.LastName}</li>
                  <nav className='NavInfoHidden'>
                    <Link to='../profil'><li>Mon profil</li></Link>
                    <Link to='../favoris'><li>Mes favoris</li></Link>
                    <Link to='../'><li>Besoin d'aide</li></Link>
                    <Link to='/login' onClick={this.logout}><li>Déconnexion</li></Link>
                  </nav>
                </div>
                <div className="header-top-right-info-date">
                  <li>{date}</li>
                  <li>{time}</li>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-01">
              <select name="crypto" id="crypto-select" onClick={this.changeCrypto}>
                {items}
              </select>
            </div>
            <div className="header-bottom-03">
              <li>HAUT</li>
              <li>{crypto?.price_data?.price_high} €</li>
            </div>
            <div className="header-bottom-04">
              <li>BAS</li>
              <li>{crypto?.price_data?.price_low} €</li>
            </div>
            <div className="header-bottom-05">
              <li>Dernière 24h</li>
              <li>{crypto?.price_data?.price_change_24h} €</li>
            </div>
            <div className="header-bottom-02">
              <li>Dernière 24h</li>
              <li>{crypto?.price_data?.price_change_percentage_24h} %</li>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header