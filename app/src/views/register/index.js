import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import api from '../../services/api';

import accueilImg from '../../assets/images/logo.png';
import logoImg from '../../assets/images/logo.svg';
import './style.css';

export default function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      FirstName: firstname,
      LastName: lastname,
      Email: email,
      Password: password,
      PasswordVerif: confirmation,
      Role: true
    };

    try {
      const response = await axios.post('http://localhost:8800/api/v1/user', data);

      alert(`Your login ID: ${response.data.id}`);
      navigate('/')
    } catch (err) {
      alert('Registration error, try again');

    }
  }
  
  return (
    <div className="register-container">
      <div className="content">
        <form onSubmit={handleRegister}>
          <img src={logoImg} alt="CRYPTOZE" className="logo"/>
          <button className="buttong" type="submit" >Google +</button>
          <button className="buttonf" type="submit">Facebook</button>

          <input placeholder="First Name" value={firstname} onChange={e => setFirstname(e.target.value)} required/>
          <input placeholder="Last Name" value={lastname} onChange={e => setLastname(e.target.value)} required/>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>

          <div className="input-group">
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <input placeholder="Password confirmation" type="password" value={confirmation} onChange={e => setConfirmation(e.target.value)} required/>
          </div>

          <button className="button" type="submit">Register</button>

          <Link className="back-link" to="/login">
          <FiArrowLeft size={16} color="#FF0B0B" />
          Connexion
          </Link>
        </form>

        <section>
          <img src={accueilImg} alt="accueil" className="imagefond"/>
        </section>
      </div>
    </div>
  )
}