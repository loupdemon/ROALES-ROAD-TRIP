import './style.scss';
import {
  Link
} from "react-router-dom";


// Import Header & Footer
import Header from '../../../components/header/index'

// Import Image
import IconFavoris from '../../../assets/IconFavoris.png'
import IconStatistics from '../../../assets/IconStatistics.png'
import IconList from '../../../assets/IconList.png'


const Profil = () => {
  document.title = "Profil"

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
              <h3>Profil</h3>
              {/* LES INFOS PROFIL ICI !! */}
            </div>
          </div>
        </div>
    </>
  )
}

export default Profil