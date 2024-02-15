import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

const Home = () => {
  return (
    <>
      <HeroSection name='Quick Mart'/>
      <Services />
      <Trusted />
    </>
  )
}

export default Home;