import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SignupThankYou() {
  return (
    <div className="max-w-md mx-auto text-center p-6 bg-white rounded-lg shadow-md">
      <CheckCircle className="mx-auto mb-4 text-[#00a086]" size={48} />
      <h2 className="text-2xl font-bold mb-2 text-gray-800">We're Fired Up!</h2>
      <p className="text-lg mb-4 text-gray-600">Get Ready to Make Some Bread!</p>
      <p className="text-md text-gray-700">
        Thank you for your interest in KitchenAds. One of our team members will reach out to you shortly to spice up your advertising strategy.
      </p>
    </div>
  );
}