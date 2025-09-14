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