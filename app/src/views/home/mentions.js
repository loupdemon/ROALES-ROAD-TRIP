import React from 'react'
import Mentions from '../../components/Mentions'
import ScrollToTop from '../../components/Contact/ScrollToTop';
import GlobalStyles from "./GlobalStyles";

const MentionsUpPage = () => {
  return (
    <div>
      <GlobalStyles/> 
      <ScrollToTop/>
      <Mentions/>
      
    </div>
  )
};

export default MentionsUpPage;
