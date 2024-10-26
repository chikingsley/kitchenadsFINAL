import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SignUpSection from '../components/SignUpSection';

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <div className="bg-gray-100">
      <HeroSection openModal={openModal} />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <SignUpSection openModal={openModal} />
    </div>
  );
};

export default Home;