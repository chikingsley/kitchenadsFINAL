import React from 'react';
import { Button } from './ui/button';

interface SignUpSectionProps {
  openModal: () => void;
}

const SignUpSection: React.FC<SignUpSectionProps> = ({ openModal }) => {
  return (
    <section className="py-20 bg-[#00a086] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#f0faf9]">Ready to Start Cooking?</h2>
        <p className="mb-8 text-[#f0faf9]">Join KitchenAds and start serving premium crypto traffic today!</p>
        <Button
          variant="secondary"
          size="lg"
          onClick={openModal}
          className="bg-[#f0faf9] text-[#00a086] hover:bg-white"
        >
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};

export default SignUpSection;