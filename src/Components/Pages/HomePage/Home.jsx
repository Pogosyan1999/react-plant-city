import React from 'react';
import Background from './BackgroundSection/Background';
import Choose from './Choose/Choose';
import Flowers from './Flowers/Flowers';
import SectionTwo from './Section2/SectionTwo';
import Shopping from './Shopping/Shopping';
import Slide from './Slider/Slide';

const Home = () => {
  return (
    <>
      <Background/>
      <SectionTwo/>
      <Flowers/>
      <Shopping/>
      <Choose/>
      <Slide/>
    </>
  )
}

export default Home