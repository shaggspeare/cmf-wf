import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8469285612:AAFlFmeFGytv3WhVaRESznODxfl_lwyBdxo';
const TELEGRAM_CHAT_ID = '353105629';

interface ContactFormData {
  fullname: string;
  email: string;
  phone: string;
  telegram: string;
  tariff: string;
  expectations?: string;
}

// Helper function to escape Markdown characters
function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    const tariffNames: { [key: string]: string } = {
      mini: 'MINI',
      standard: 'ACTIVE STANDART',
      premium: 'PREMIUM',
      vip: 'VIP',
      undecided: 'Ще не вирішила / вирішив'
    };

    const message = `
🎓 *Нова заявка на курс CMF Design!*

👤 *Ім'я:* ${escapeMarkdown(formData.fullname)}
📧 *Email:* ${escapeMarkdown(formData.email)}
📱 *Телефон:* ${escapeMarkdown(formData.phone)}
💬 *Telegram:* ${escapeMarkdown(formData.telegram)}
🎯 *Тариф:* ${escapeMarkdown(tariffNames[formData.tariff] || formData.tariff)}

${formData.expectations ? `💭 *Очікування від курсу:*\n${escapeMarkdown(formData.expectations)}` : ''}

📅 Час подачі: ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      throw new Error('Failed to send message to Telegram');
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}