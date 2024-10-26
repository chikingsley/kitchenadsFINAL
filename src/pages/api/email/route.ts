import { NextApiRequest, NextApiResponse } from 'next';
//import { Resend } from '../../lib/resend';
import SignUpEmail from '../../../emails/SignUpEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const {
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
      } = req.body;

      const data = await resend.emails.send({
        from: 'no-reply@marketing.wepeacock.com',
        to: 'david@kitchenads.email',
        subject: 'New KitchenAds Sign Up',
        react: SignUpEmail({
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
        }),
      });

      res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error sending email', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
