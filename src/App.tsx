import React, { useEffect } from 'react';
import BusinessCard from './Components/BusinessCard/BusinessCard';
import PaperStack from './Components/PaperStack/PaperStack';
import Phone from './Components/Phone/Phone';
import Watch from './Components/Watch/Watch';
import './App.scss';

function App() {
  const handleHorizontalScroll = (event: WheelEvent) => {
    event.preventDefault();
    window.scrollBy({
      left: event.deltaY < 0 ? -25 : 25,
    });
  }
  useEffect(() => {
    window.addEventListener('wheel', handleHorizontalScroll);

    return () => {
      window.removeEventListener('wheel', handleHorizontalScroll);
    };
  }, []);

  return (
    <div>
      <BusinessCard />
      {/* TODO: With quote */}

      {/* https://negativespace.co/wp-content/uploads/2017/10/iphone-phone-watch-wood-table-desk-pen-glasses-freephotoscc-thumb-1.jpg */}
      {/* TODO: Pad with goals on
        - Language Learning 
        - Starting a Blog
        - Making a Business
        - Completing Projects
        - Exiting Vim
      */}

      <PaperStack />

      <Phone />

      {/* <div className="pen"></div> */}

      <Watch />
      
      {/* Keyboard w/ easter egg */}
    </div>
  );
}

export default App;
