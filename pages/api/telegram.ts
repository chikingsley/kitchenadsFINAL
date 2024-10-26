import { NextApiRequest, NextApiResponse } from 'next';
import { sendTelegramMessage } from '../../api/telegram';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    await sendTelegramMessage(message);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error);
    res.status(500).json({ success: false, error: 'Failed to send message' });
  }
}
