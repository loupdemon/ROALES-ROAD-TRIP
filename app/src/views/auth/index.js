import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import './styles.css';

import { FiLogIn } from 'react-icons/fi';
import accueilImg from '../../assets/images/logo.png';
import logoImg from '../../assets/images/logo.svg';


const Auth = () => {
  const navigate = useNavigate();
  document.title = "Auth"

  const submitLogin = e => {
    e.preventDefault()
    axios.post('http://localhost:8800/api/v1/user/login', {
      Email: e.nativeEvent.target[2].value,
      Password: e.nativeEvent.target[3].value
    })
      .then(res => {
        if (!res.data.token) {
          return
        }

        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('user', JSON.stringify(res.data.user))
        navigate('/dash');
      }).catch(function (error) {
        console.log(error);
      });
  }
  return (
    // <>
    //     <div className="view-auth">
    //         <form onSubmit={submitLogin}>
    //             <input type="email" name="Email" placeholder="Email"/>
    //             <input type="password" name="Password" placeholder="Password"/>
    //             <button type='submit'>Connexion</button>
    //         </form>
    //     </div>
    <div className="Login-container">
      <img src={accueilImg} alt="accueil" className="imagefond" />
      <section className="form">
        <img src={logoImg} alt="CRYPTOZE" className="logo" />

        <form onSubmit={submitLogin}>
          <h1>THE MONEY ACCOUNT</h1>
          <h2>Stay informed and beat the coins.</h2>

          <button className="buttong" type="submit" >Google +</button>
          <button className="buttonf" type="submit">Facebook</button>

          <input type="email" name="Email" placeholder="Email" required />
          <input type="password" name="Password" placeholder="Password" required />

          <h3>Forgot your password ?</h3>
          <button className="button" type="submit">Connexion</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#FF0B0B" />
            Register
          </Link>

        </form>
      </section>
    </div>
  )
}

export default Auth