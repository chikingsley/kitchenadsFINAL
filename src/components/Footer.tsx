import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

interface FooterProps {
  openModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (section) {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-[#00a086] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KitchenAds</h3>
            <p>Premium crypto traffic for your trading platform</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@kitchenads.com</p>
            <p>Telegram: @kitchenads</p>
            <p>Skype: kitchenads_support</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full text-[#00a086] border-[#00a086] hover:bg-[#00a086] hover:text-white"
                onClick={() => handleNavigation()}
              >
                Home
              </Button>
              <Button
                variant="outline"
                className="w-full text-[#00a086] border-[#00a086] hover:bg-[#00a086] hover:text-white"
                onClick={() => handleNavigation('features')}
              >
                Features
              </Button>
              <Button
                variant="outline"
                className="w-full text-[#00a086] border-[#00a086] hover:bg-[#00a086] hover:text-white"
                onClick={() => handleNavigation('how-it-works')}
              >
                How We Work
              </Button>
              <Button
                variant="outline"
                className="w-full text-[#00a086] border-[#00a086] hover:bg-[#00a086] hover:text-white"
                onClick={openModal}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Button variant="link" onClick={() => navigate('/terms')} className="text-[#00a086] hover:text-[#008c75] p-0 mr-4">Terms of Service</Button>
            <Button variant="link" onClick={() => navigate('/privacy')} className="text-[#00a086] hover:text-[#008c75] p-0">Privacy Policy</Button>
          </div>
          <div className="text-sm text-gray-600">
            &copy; 2024 KitchenAds LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;