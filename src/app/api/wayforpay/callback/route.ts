import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const merchantSecretKey = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;
    
    if (!merchantSecretKey) {
      return NextResponse.json(
        { error: 'Merchant secret key not configured' },
        { status: 500 }
      );
    }

    // Verify the signature from WayForPay
    const {
      merchantSignature,
      merchantAccount,
      orderReference,
      amount,
      currency,
      authCode,
      cardPan,
      transactionStatus,
      reasonCode
    } = body;

    // Create signature verification string
    const signatureString = [
      merchantAccount,
      orderReference,
      amount,
      currency,
      authCode,
      cardPan,
      transactionStatus,
      reasonCode
    ].join(';');

    // Generate expected signature
    const expectedSignature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(signatureString)
      .digest('hex');

    // Verify signature
    if (merchantSignature !== expectedSignature) {
      console.error('Invalid signature from WayForPay');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Process payment status
    if (transactionStatus === 'Approved') {
      console.log('Payment approved:', {
        orderReference,
        amount,
        currency,
        authCode,
        cardPan: cardPan ? `****${cardPan.slice(-4)}` : 'N/A'
      });

      // Here you can add logic to:
      // - Update database with payment status
      // - Send confirmation email to customer
      // - Grant access to the course
      // - Send notification to Telegram (if needed)

    } else {
      console.log('Payment failed or declined:', {
        orderReference,
        transactionStatus,
        reasonCode
      });
    }

    // Return success response to WayForPay
    return NextResponse.json({
      orderReference,
      status: 'accept',
      time: Math.floor(Date.now() / 1000)
    });

  } catch (error) {
    console.error('WayForPay callback error:', error);
    return NextResponse.json(
      { error: 'Failed to process callback' },
      { status: 500 }
    );
  }
}