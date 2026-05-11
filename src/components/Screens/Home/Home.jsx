import BrandFilter from './components/BrandFilter';
import BrowseByLifestyle from './components/BrowseByLifestyle';
import ContactInfo from './components/ContactInfo';
import GradientSection from './components/GradientSection';
import HeroSection from './components/HeroSection';
import LatestProducts from './components/LatestProducts';
import React from 'react';
const Home = () => {
  React.useEffect(() => {}, []);

  return (
    <div>
      <HeroSection />
            <div className="w-full flex h-[3px]">
        <div className="flex-1" style={{ backgroundColor: '#005307' }} />
        <div className="flex-1" style={{ backgroundColor: '#FFFFFF' }} />
        <div className="flex-1" style={{ backgroundColor: '#C0392B' }} />
      </div>
      <BrandFilter />
      <BrowseByLifestyle />

      <LatestProducts />
      <GradientSection />
      <ContactInfo />
    </div>
  );
};

export default Home;
