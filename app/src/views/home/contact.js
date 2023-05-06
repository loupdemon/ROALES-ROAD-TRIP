import React from 'react'
import Contact from '../../components/Contact'
import ScrollToTop from '../../components/Contact/ScrollToTop';
import GlobalStyles from "./GlobalStyles";

const ContactUpPage = () => {
  return (
    <div>
      <GlobalStyles/> 
       <ScrollToTop/>
       <Contact/>
    </div>
  )
};

export default ContactUpPage;
