import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import SignUpSection from '../components/SignUpSection';

interface HomeProps {
  openModal: () => void;
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
  return (
    <>
      <Helmet>
        <title>KitchenAds - Premium Crypto Traffic Network</title>
        <meta name="description" content="KitchenAds is your premier partner for high-quality crypto traffic. Connect with top-tier advertisers and publishers in the cryptocurrency space." />
      </Helmet>
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
    </>
  );
};

export default Home;
