import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section?: string) => {
    if (location.pathname !== '/') {
      navigate('/');
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
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation(); }} className="flex items-center space-x-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-09-26%2017.29.15-rKfRTrAU99YqoBypRxkNB8gpeAZcNd.jpg"
            alt="KitchenAds Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-[#00a086]">KitchenAds</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex">
            <Button
              variant="link"
              className="text-sm font-medium text-gray-600 hover:text-[#00a086] px-2"
              onClick={() => handleNavigation()}
            >
              Home
            </Button>
            <Button
              variant="link"
              className="text-sm font-medium text-gray-600 hover:text-[#00a086] px-2"
              onClick={() => handleNavigation('features')}
            >
              Features
            </Button>
            <Button
              variant="link"
              className="text-sm font-medium text-gray-600 hover:text-[#00a086] px-2"
              onClick={() => handleNavigation('how-it-works')}
            >
              How We Work
            </Button>
          </div>
          <div className="flex items-center space-x-4 ml-4">
            <Link to="/events" className="text-sm font-medium text-gray-600 hover:text-[#00a086]">
              Events
            </Link>
            <Link to="/careers" className="text-sm font-medium text-gray-600 hover:text-[#00a086]">
              Careers
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="text-[#00a086] border-[#00a086] hover:bg-[#00a086] hover:text-white"
            onClick={openModal}
          >
            Sign Up
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6 text-[#00a086]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <DropdownMenuItem 
                className="text-[#00a086] hover:bg-[#00a086] hover:text-white focus:bg-[#00a086] focus:text-white cursor-pointer transition-colors" 
                onClick={() => handleNavigation()}
              >
                Home
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-[#00a086] hover:bg-[#00a086] hover:text-white focus:bg-[#00a086] focus:text-white cursor-pointer transition-colors" 
                onClick={() => handleNavigation('features')}
              >
                Features
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-[#00a086] hover:bg-[#00a086] hover:text-white focus:bg-[#00a086] focus:text-white cursor-pointer transition-colors" 
                onClick={() => handleNavigation('how-it-works')}
              >
                How We Work
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-[#00a086] hover:bg-[#00a086] hover:text-white focus:bg-[#00a086] focus:text-white cursor-pointer transition-colors" 
                onClick={() => navigate('/events')}
              >
                Events
              </DropdownMenuItem>
              <DropdownMenuItem 
                className="text-[#00a086] hover:bg-[#00a086] hover:text-white focus:bg-[#00a086] focus:text-white cursor-pointer transition-colors" 
                onClick={() => navigate('/careers')}
              >
                Careers
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
