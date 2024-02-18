import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import { useProductContext } from '../../Context/ProductContext';
import FeaturedProducts from '../FeaturedProducts';

const Home = () => {
  return (
    <>
      <HeroSection name='Quick Mart'/>
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  )
}

export default Home;