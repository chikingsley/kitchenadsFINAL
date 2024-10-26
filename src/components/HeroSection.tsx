import React from 'react';
import { Button } from './ui/button';

interface HeroSectionProps {
  openModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#00a086] text-[#f0faf9] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Premium Crypto Traffic, Served Fresh</h1>
        <p className="text-xl mb-8">
          KitchenAds delivers high-quality, real-time traffic for your cryptocurrency trading platforms. Blend your ROI to perfection.
        </p>
        <div className="space-x-4">
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-white text-[#00a086] hover:bg-gray-100"
            onClick={scrollToFeatures}
          >
            Learn More
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent text-white border-white hover:bg-[#008c75]"
            onClick={openModal}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;