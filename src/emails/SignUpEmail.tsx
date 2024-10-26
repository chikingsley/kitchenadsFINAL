import * as React from 'react';
import { Html, Head, Body, Heading, Text, Container, Section, Hr } from '@react-email/components';

interface SignUpEmailProps {
  fullName: string;
  company: string;
  trafficType: string;
  jobTitle: string;
  vertical: string;
  phone: string;
  skypeId: string;
  telegramId: string;
  email: string;
  message: string;
}

export const SignUpEmail: React.FC<Readonly<SignUpEmailProps>> = ({
  fullName,
  company,
  trafficType,
  jobTitle,
  vertical,
  phone,
  skypeId,
  telegramId,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New KitchenAds Sign Up</Heading>
        <Text style={text}>A new user has signed up for KitchenAds:</Text>
        <Section style={section}>
          <Text style={sectionItem}><strong>Full Name:</strong> {fullName}</Text>
          <Text style={sectionItem}><strong>Company:</strong> {company}</Text>
          <Text style={sectionItem}><strong>Traffic Type:</strong> {trafficType}</Text>
          <Text style={sectionItem}><strong>Job Title:</strong> {jobTitle}</Text>
          <Text style={sectionItem}><strong>Vertical:</strong> {vertical}</Text>
          <Text style={sectionItem}><strong>Phone:</strong> {phone}</Text>
          <Text style={sectionItem}><strong>Skype ID:</strong> {skypeId}</Text>
          <Text style={sectionItem}><strong>Telegram ID:</strong> {telegramId}</Text>
          <Text style={sectionItem}><strong>Email:</strong> {email}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={text}><strong>Message:</strong></Text>
        <Text style={text}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default SignUpEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const h1 = {
  color: '#00a086',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '32px',
  margin: '0 0 20px',
  padding: '0 48px',
};

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  padding: '0 48px',
};

const section = {
  padding: '0 48px',
};

const sectionItem = {
  color: '#525f7f',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};