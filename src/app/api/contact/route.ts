import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS?.split(',').map(id => id.trim()) || [];

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
    console.log('=== Contact Form Submission Started ===');

    // Check environment variables
    if (!TELEGRAM_BOT_TOKEN) {
      console.error('TELEGRAM_BOT_TOKEN is not set');
      return NextResponse.json(
        { success: false, error: 'Bot token not configured' },
        { status: 500 }
      );
    }

    if (!TELEGRAM_CHAT_IDS || TELEGRAM_CHAT_IDS.length === 0) {
      console.error('TELEGRAM_CHAT_IDS is not set or empty');
      return NextResponse.json(
        { success: false, error: 'Chat IDs not configured' },
        { status: 500 }
      );
    }

    console.log('Environment check passed:', {
      botTokenExists: !!TELEGRAM_BOT_TOKEN,
      chatIdsCount: TELEGRAM_CHAT_IDS.length,
      chatIds: TELEGRAM_CHAT_IDS
    });

    const formData: ContactFormData = await request.json();
    console.log('Form data received:', formData);

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

    console.log('Message prepared:', message);

    // Send message to all chat IDs
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    console.log('Telegram URL:', telegramUrl.replace(TELEGRAM_BOT_TOKEN, '[HIDDEN]'));

    const telegramPromises = TELEGRAM_CHAT_IDS.map(async (chatId) => {
      console.log(`Sending message to chat ID: ${chatId}`);

      try {
        const telegramResponse = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });

        const responseData = await telegramResponse.json();

        if (!telegramResponse.ok) {
          console.error(`Telegram API error for chat ${chatId}:`, {
            status: telegramResponse.status,
            statusText: telegramResponse.statusText,
            data: responseData
          });
          throw new Error(`Failed to send message to Telegram chat ${chatId}: ${JSON.stringify(responseData)}`);
        }

        console.log(`Message sent successfully to chat ${chatId}:`, responseData);
        return telegramResponse;

      } catch (fetchError) {
        console.error(`Network error sending to chat ${chatId}:`, fetchError);
        throw fetchError;
      }
    });

    await Promise.all(telegramPromises);
    console.log('=== All messages sent successfully ===');

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });

  } catch (error) {
    console.error('=== Contact form submission error ===', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to submit form',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}