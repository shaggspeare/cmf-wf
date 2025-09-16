import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS?.split(',').map(id => id.trim()) || [];

interface OrderData {
  userId: string;
  fullname: string;
  email: string;
  phone: string;
  telegram: string;
  planName: string;
  planPrice: string;
  orderReference: string;
  transactionStatus: string;
  reasonCode: string;
  expectations?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!TELEGRAM_BOT_TOKEN) {
      console.error('TELEGRAM_BOT_TOKEN not configured');
      return NextResponse.json({
        success: false,
        error: 'Telegram bot not configured'
      }, { status: 500 });
    }

    if (!TELEGRAM_CHAT_IDS || TELEGRAM_CHAT_IDS.length === 0) {
      console.error('TELEGRAM_CHAT_IDS not configured');
      return NextResponse.json({
        success: false,
        error: 'Telegram chat IDs not configured'
      }, { status: 500 });
    }

    const orderData: OrderData = await request.json();

    // Determine status emoji and text
    const isSuccess = orderData.transactionStatus === 'Approved' ||
                     orderData.reasonCode === '1100' ||
                     orderData.reasonCode === '1134' ||
                     orderData.transactionStatus === 'Pending';

    const statusEmoji = isSuccess ? '✅' : '❌';
    const statusText = isSuccess ? 'УСПІШНА ОПЛАТА' : 'НЕВДАЛА ОПЛАТА';

    // Format message
    const message = `${statusEmoji} ${statusText}

👤 *Клієнт:*
${orderData.fullname}

📧 *Email:* ${orderData.email}
📱 *Телефон:* ${orderData.phone}
💬 *Telegram:* ${orderData.telegram}

📦 *Замовлення:*
${orderData.planName} - ${orderData.planPrice}
🔗 *ID:* ${orderData.orderReference}

💳 *Статус платежу:*
${orderData.transactionStatus} (код: ${orderData.reasonCode})

${orderData.expectations ? `📝 *Очікування:*
${orderData.expectations}

` : ''}🕐 *Час:* ${new Date().toLocaleString('uk-UA', {
      timeZone: 'Europe/Kiev',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })}`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const results = [];

    // Send to all configured chats
    for (const chatId of TELEGRAM_CHAT_IDS) {
      try {
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message
          }),
        });

        const responseData = await response.json();

        results.push({
          chatId,
          success: response.ok,
          status: response.status,
          data: responseData
        });

        if (!response.ok) {
          console.error(`Failed to send Telegram notification to ${chatId}:`, responseData);
        }

      } catch (error) {
        console.error(`Error sending Telegram notification to ${chatId}:`, error);
        results.push({
          chatId,
          success: false,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }

    console.log('Telegram notifications sent:', results);

    return NextResponse.json({
      success: true,
      results,
      message: 'Notifications sent'
    });

  } catch (error) {
    console.error('Telegram notify error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}