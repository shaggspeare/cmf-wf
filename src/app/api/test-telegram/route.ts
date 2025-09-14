import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS?.split(',').map(id => id.trim()) || [];

export async function GET(request: NextRequest) {
  try {
    console.log('=== Telegram Bot Test Started ===');

    // Check environment variables
    const envCheck = {
      TELEGRAM_BOT_TOKEN: !!TELEGRAM_BOT_TOKEN,
      TELEGRAM_BOT_TOKEN_LENGTH: TELEGRAM_BOT_TOKEN?.length || 0,
      TELEGRAM_CHAT_IDS: TELEGRAM_CHAT_IDS,
      TELEGRAM_CHAT_IDS_COUNT: TELEGRAM_CHAT_IDS.length,
      NODE_ENV: process.env.NODE_ENV,
      VERCEL_ENV: process.env.VERCEL_ENV
    };

    console.log('Environment check:', envCheck);

    if (!TELEGRAM_BOT_TOKEN) {
      return NextResponse.json({
        success: false,
        error: 'TELEGRAM_BOT_TOKEN not found',
        envCheck
      });
    }

    if (!TELEGRAM_CHAT_IDS || TELEGRAM_CHAT_IDS.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'TELEGRAM_CHAT_IDS not found or empty',
        envCheck
      });
    }

    // Test bot info first
    const botInfoUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
    console.log('Testing bot info...');

    const botInfoResponse = await fetch(botInfoUrl);
    const botInfoData = await botInfoResponse.json();

    console.log('Bot info response:', {
      status: botInfoResponse.status,
      ok: botInfoResponse.ok,
      data: botInfoData
    });

    if (!botInfoResponse.ok) {
      return NextResponse.json({
        success: false,
        error: 'Bot token invalid',
        botError: botInfoData,
        envCheck
      });
    }

    // Test sending a simple message
    const testMessage = `🧪 Test message from Vercel\nTime: ${new Date().toISOString()}\nEnvironment: ${process.env.VERCEL_ENV || 'local'}`;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const results = [];

    for (const chatId of TELEGRAM_CHAT_IDS) {
      console.log(`Testing message to chat ID: ${chatId}`);

      try {
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: testMessage,
          }),
        });

        const responseData = await response.json();

        console.log(`Response for chat ${chatId}:`, {
          status: response.status,
          ok: response.ok,
          data: responseData
        });

        results.push({
          chatId,
          success: response.ok,
          status: response.status,
          data: responseData
        });

      } catch (error) {
        console.error(`Error for chat ${chatId}:`, error);
        results.push({
          chatId,
          success: false,
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }

    console.log('=== Test completed ===');

    return NextResponse.json({
      success: true,
      botInfo: botInfoData,
      results,
      envCheck,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}