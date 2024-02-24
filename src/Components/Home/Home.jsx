import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
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