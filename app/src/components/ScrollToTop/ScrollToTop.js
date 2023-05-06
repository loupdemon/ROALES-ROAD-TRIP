//libraries and hooks
import { useEffect, useState } from 'react';
//components
//assets
import './ScrollToTop.css';
import UpArrow from './up-arrow.png';

export const ScrollToTop = () => {
   const [visible, setVisible] = useState(false);
   const handleScroll = () => {
      if (window.scrollY > 200) {
         setVisible(true);
      } else {
         setVisible(false);
      }
   };
   const onClick = () => {
      window.scrollTo({ top: 0 });
      // setVisible(false);
   };
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <button onClick={onClick} className={`ScrollToTop ${visible ? 'visible' : 'hidden'}`}>
         <img width='50' height='50' src={UpArrow} alt="up arrow" />
      </button>
   );
};