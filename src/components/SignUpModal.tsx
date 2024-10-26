import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import SignupThankYou from './SignupThankYou';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    trafficType: '',
    jobTitle: '',
    vertical: '',
    phone: '',
    skypeId: '',
    telegramId: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Environment variables:', {
      botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN,
      chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID
    });
    
    const message = `
🆕 New Sign Up Request

👤 Full Name: ${formData.fullName}
🏢 Company: ${formData.company}
🔄 Traffic Type: ${formData.trafficType}
👔 Job Title: ${formData.jobTitle}
📊 Vertical: ${formData.vertical}
📱 Phone: ${formData.phone}
💬 Skype ID: ${formData.skypeId}
📨 Telegram ID: ${formData.telegramId}
📧 Email: ${formData.email}

💭 Message:
${formData.message}
`;

    try {
      console.log('Sending request to Telegram...');
      const telegramUrl = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`;
      console.log('Telegram URL:', telegramUrl);
      
      const requestBody = {
        chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
        text: message,
      };
      console.log('Request body:', requestBody);

      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response:', response);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to send message: ${responseData.description}`);
      }

      console.log('Message sent successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-[#00a086] text-2xl font-bold text-center">
                Sign Up for KitchenAds
              </DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[80vh] pr-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name*</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    onChange={handleInputChange}
                    placeholder="Your full name..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company*</Label>
                  <Input
                    id="company"
                    name="company"
                    required
                    onChange={handleInputChange}
                    placeholder="Your company name..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="trafficType">
                    Are you buying or selling traffic?*
                  </Label>
                  <Select
                    name="trafficType"
                    onValueChange={(value) =>
                      handleSelectChange('trafficType', value)
                    }
                    required
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select option..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="buying">Buying traffic</SelectItem>
                      <SelectItem value="selling">Selling traffic</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Select
                    name="jobTitle"
                    onValueChange={(value) =>
                      handleSelectChange('jobTitle', value)
                    }
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select job title..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="affiliate_manager">
                        Affiliate Manager
                      </SelectItem>
                      <SelectItem value="brand_manager">Brand Manager</SelectItem>
                      <SelectItem value="marketing_director">
                        Marketing Director
                      </SelectItem>
                      <SelectItem value="marketing_team_member">
                        Marketing Team Member
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vertical">Vertical*</Label>
                  <Select
                    name="vertical"
                    onValueChange={(value) =>
                      handleSelectChange('vertical', value)
                    }
                    required
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select vertical..." />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="crypto">Crypto</SelectItem>
                      <SelectItem value="casino">Casino</SelectItem>
                      <SelectItem value="sweeps">Sweeps</SelectItem>
                      <SelectItem value="nutra">Nutra</SelectItem>
                      <SelectItem value="dating">Dating</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                      <SelectItem value="media">Media</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    placeholder="Your phone number..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="skypeId">Skype ID</Label>
                  <Input
                    id="skypeId"
                    name="skypeId"
                    onChange={handleInputChange}
                    placeholder="Your Skype ID..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="telegramId">Telegram ID</Label>
                  <Input
                    id="telegramId"
                    name="telegramId"
                    onChange={handleInputChange}
                    placeholder="Your Telegram ID..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    onChange={handleInputChange}
                    placeholder="Your email address..."
                    className="placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your traffic needs or any questions you have..."
                    onChange={handleInputChange}
                    className="placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#00a086] text-white hover:bg-[#008c75] rounded-full"
                >
                  Sign Up
                </Button>
              </form>
            </ScrollArea>
          </>
        ) : (
          <SignupThankYou />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
