import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import { Helmet } from 'react-helmet-async'

const SignUp: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleSignUp = async (formData: any) => {
    try {
      const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you for signing up!');
      } else {
        throw new Error(JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(`There was an error submitting your form. Please try again. Error details: ${error.message}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | KitchenAds</title>
        <meta name="description" content="Join KitchenAds network today. Connect with premium crypto traffic sources and take your marketing to the next level." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Ready to Start Cooking with KitchenAds - Sign Up Now!</h1>
        <p className="mb-8">Join our network and start serving premium crypto traffic</p>
        {message && (
          <div className={`p-4 mb-4 ${message.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        <SignUpForm onSubmit={handleSignUp} />
      </div>
    </>
  )
}

export default SignUp
