import React from 'react';
import { ClipboardList, MessageCircle, Link, Zap } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-12 h-12 text-[#00a086]" />,
    title: 'Sign Up',
    description: 'Fill out our simple sign-up form to get started.',
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-[#00a086]" />,
    title: 'Consultation',
    description: 'A team member will reach out within the hour to discuss available deals and prices.',
  },
  {
    icon: <Link className="w-12 h-12 text-[#00a086]" />,
    title: 'Integration',
    description: "If agreed, we'll perform API integration to connect our services seamlessly.",
  },
  {
    icon: <Zap className="w-12 h-12 text-[#00a086]" />,
    title: 'Traffic Delivery',
    description: 'Start receiving high-quality crypto traffic to boost your conversions.',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00a086]">How to Work with KitchenAds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;