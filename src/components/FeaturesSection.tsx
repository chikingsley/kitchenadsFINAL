import React from 'react';
import { Zap, BarChart, Headphones, Bitcoin } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-12 h-12 text-[#00a086]" />,
    title: 'High Quality Crypto-Focused Traffic',
    description: 'Premium traffic sources tailored for cryptocurrency platforms, ensuring high conversion rates and engaged users.',
  },
  {
    icon: <BarChart className="w-12 h-12 text-[#00a086]" />,
    title: 'Real-Time Management',
    description: 'TrackBox integration for instant traffic monitoring and optimization, allowing you to adjust campaigns on the fly for maximum performance.',
  },
  {
    icon: <Headphones className="w-12 h-12 text-[#00a086]" />,
    title: '24/7 Support',
    description: 'Round-the-clock communication via Telegram for immediate assistance, ensuring your campaigns never miss a beat in the fast-paced crypto market.',
  },
  {
    icon: <Bitcoin className="w-12 h-12 text-[#00a086]" />,
    title: 'Crypto Payment Options',
    description: 'Flexible payment methods including cryptocurrency, aligning with your preferred financial ecosystem and providing seamless transactions.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#00a086]">Why Choose KitchenAds?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;