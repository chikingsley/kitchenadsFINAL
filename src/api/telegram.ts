export async function sendTelegramMessage(message: string) {
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API Error:', data);
      throw new Error(data.description || 'Failed to send Telegram message');
    }

    return data;
  } catch (error) {
    console.error('Error sending telegram message:', error);
    throw error;
  }
}
