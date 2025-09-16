import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

interface PaymentRequest {
  planName: string;
  price: number;
  currency: string;
  userEmail?: string;
  userPhone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentRequest = await request.json();
    const { planName, price, currency = 'UAH', userEmail, userPhone } = body;

    // Get WayForPay credentials from environment variables
    const merchantLogin = process.env.WAYFORPAY_MERCHANT_LOGIN;
    const merchantSecretKey = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;

    if (!merchantLogin || !merchantSecretKey) {
      return NextResponse.json(
        { error: 'WayForPay credentials not configured' },
        { status: 500 }
      );
    }

    // Generate unique order reference
    const orderReference = `CMF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Current timestamp
    const orderDate = Math.floor(Date.now() / 1000);

    // Get the base URL for callbacks
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Prepare payment data
    const paymentData = {
      merchantAccount: merchantLogin,
      merchantDomainName: host,
      orderReference,
      orderDate,
      amount: price,
      currency,
      productName: [`CMF Design Course - ${planName}`],
      productCount: [1],
      productPrice: [price],
      clientFirstName: 'Customer',
      clientLastName: 'Name',
      clientEmail: userEmail || 'customer@example.com',
      clientPhone: userPhone || '+380000000000',
      language: 'UA',
      returnUrl: `${baseUrl}/api/wayforpay/return`,
      serviceUrl: `${baseUrl}/api/wayforpay/callback`,
      // Additional URLs for different payment outcomes
      merchantTransactionSecureType: 'AUTO',
      // WayForPay will redirect to these URLs based on payment result
      // Note: WayForPay uses returnUrl for both success and failure by default
      // But we can handle different scenarios in the callback
      alternativeUrl: `${baseUrl}/payment/failure`
    };

    // Create signature string
    const signatureString = [
      paymentData.merchantAccount,
      paymentData.merchantDomainName,
      paymentData.orderReference,
      paymentData.orderDate,
      paymentData.amount,
      paymentData.currency,
      paymentData.productName[0],
      paymentData.productCount[0],
      paymentData.productPrice[0]
    ].join(';');

    // Generate HMAC signature
    const signature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(signatureString)
      .digest('hex');

    // Add signature to payment data
    const finalPaymentData = {
      ...paymentData,
      merchantSignature: signature
    };

    // Return the payment form data
    return NextResponse.json({
      success: true,
      paymentUrl: 'https://secure.wayforpay.com/pay',
      paymentData: finalPaymentData
    });

  } catch (error) {
    console.error('WayForPay payment error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment request' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const planName = searchParams.get('planName');
    const priceString = searchParams.get('price');

    if (!userId || !planName || !priceString) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Get user data from shared storage
    const { userStorage } = await import('../../../lib/userStorage');
    const userData = userStorage[userId];

    if (!userData) {
      return NextResponse.json(
        { error: 'User data not found' },
        { status: 404 }
      );
    }

    const price = parseInt(priceString.replace(/[^\d]/g, ''));

    // Get WayForPay credentials from environment variables
    const merchantLogin = process.env.WAYFORPAY_MERCHANT_LOGIN;
    const merchantSecretKey = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;

    if (!merchantLogin || !merchantSecretKey) {
      return NextResponse.json(
        { error: 'WayForPay credentials not configured' },
        { status: 500 }
      );
    }

    // Generate unique order reference with userId
    const orderReference = `CMF-${Date.now()}-${userId.substring(0, 8)}`;

    // Current timestamp
    const orderDate = Math.floor(Date.now() / 1000);

    // Get the base URL for callbacks
    const host = request.headers.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;

    // Prepare payment data with user information
    const paymentData = {
      merchantAccount: merchantLogin,
      merchantDomainName: host,
      orderReference,
      orderDate,
      amount: price,
      currency: 'UAH',
      productName: [`CMF Design Course - ${planName}`],
      productCount: [1],
      productPrice: [price],
      clientFirstName: userData.fullname.split(' ')[0] || 'Customer',
      clientLastName: userData.fullname.split(' ').slice(1).join(' ') || 'Name',
      clientEmail: userData.email,
      clientPhone: userData.phone,
      language: 'UA',
      returnUrl: `${baseUrl}/api/wayforpay/return?userId=${userId}`,
      serviceUrl: `${baseUrl}/api/wayforpay/callback?userId=${userId}`,
      merchantTransactionSecureType: 'AUTO',
    };

    // Create signature string
    const signatureString = [
      paymentData.merchantAccount,
      paymentData.merchantDomainName,
      paymentData.orderReference,
      paymentData.orderDate,
      paymentData.amount,
      paymentData.currency,
      paymentData.productName[0],
      paymentData.productCount[0],
      paymentData.productPrice[0]
    ].join(';');

    // Generate HMAC signature
    const signature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(signatureString)
      .digest('hex');

    // Add signature to payment data
    const finalPaymentData = {
      ...paymentData,
      merchantSignature: signature
    };

    // Create HTML form that auto-submits to WayForPay
    const formHTML = `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting to Payment</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          .loading {
            text-align: center;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
        <div class="loading">
          <div class="spinner"></div>
          <h2>Redirecting to Payment...</h2>
          <p>Please wait</p>
        </div>
        <form id="wayforpay-form" method="POST" action="https://secure.wayforpay.com/pay" style="display: none;">
          ${Object.entries(finalPaymentData).map(([key, value]) =>
            `<input type="hidden" name="${key}" value="${Array.isArray(value) ? value.join(',') : value}" />`
          ).join('')}
        </form>
        <script>
          document.getElementById('wayforpay-form').submit();
        </script>
      </body>
      </html>
    `;

    return new NextResponse(formHTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache'
      },
    });

  } catch (error) {
    console.error('WayForPay GET payment error:', error);
    return NextResponse.json(
      { error: 'Failed to process payment request' },
      { status: 500 }
    );
  }
}