import React/*, {useState} */from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
// import Info from '../../components/Info';
// import { homeObjOne/*,homeObjFoor*/ } from '../../components/Info/Data';
import Market from "../../components/Market";
import News from "../../components/News";
import Experts from "../../components/Experts";
import GlobalStyles from "./GlobalStyles";
const Home = () => {
  /*const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };*/
  return (
    <div>
      <GlobalStyles/> 
      <Navbar/>
      <Hero/>
      {/* <Info {...homeObjOne}/> */}
      <Market/>
      <News/>
      <Experts/>

      {/* <Info {...homeObjFoor}/> */}
      
    </div>
  )
};

export default Home;
