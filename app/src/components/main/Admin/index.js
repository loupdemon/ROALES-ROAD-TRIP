import './style.scss';
import {
  Link
} from "react-router-dom";


// Import Header & Footer
import Header from '../../header/index'

// Import Image
import IconFavoris from '../../../assets/IconFavoris.png'
import IconStatistics from '../../../assets/IconStatistics.png'
import IconList from '../../../assets/IconList.png'


const Admin = () => {
  document.title = "Administrateur"

  return (
    <>
      <Header/>
        <div className="view-dash">
          <div className="view-dash-left">

          <Link to="../"><div  className="view-dash-left-menu">
             <img src={IconStatistics} alt="Statistics"/>
            </div></Link>
            <Link to="../list"><div  className="view-dash-left-menu">
              <img src={IconList} alt="List"/>
            </div></Link>
            <Link to="../favoris"><div  className="view-dash-left-menu">
              <img src={IconFavoris} alt="Favoris"/>
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
              <div className="view-dash-right-main-left">
                <div className="ListCryptoAdmin">
                  <p>List Crypto</p>
                  <div className='MenuDeroulant'>
                  {/* LIST DES CRYPTO */}
                    <div className='User'>
                      <li>BTC</li>
                      <li>$51.000</li>
                      <li>Add</li>
                    </div>

                    <div className='User'>
                      <li>BTC</li>
                      <li>$51.000</li>
                      <li>Add</li>
                    </div>

                    <div className='User'>
                      <li>BTC</li>
                      <li>$51.000</li>
                      <li>Add</li>
                    </div>
                    
                  </div>
                </div>
              </div>
              
              <div className="view-dash-right-main-right">
                <div className="ListUser">
                  <p>List Utilisateur</p>
                  <div className='MenuDeroulant'>
                  {/* LIST DES USER */}
                    <div className='User'>
                      <li>Nathan Pin</li>
                      <li>Status Actif</li>
                      <li>Delete</li>
                    </div>

                    <div className='User'>
                      <li>Nathan Pin</li>
                      <li>Status Actif</li>
                      <li>Delete</li>
                    </div>

                    <div className='User'>
                      <li>Nathan Pin</li>
                      <li>Status Actif</li>
                      <li>Delete</li>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Admin