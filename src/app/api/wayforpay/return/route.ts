import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Handle GET requests from WayForPay return
  const searchParams = request.nextUrl.searchParams;
  const transactionStatus = searchParams.get('transactionStatus');
  const reasonCode = searchParams.get('reasonCode');
  
  console.log('WayForPay GET return:', { transactionStatus, reasonCode });
  
  // Determine redirect destination based on WayForPay response codes
  // reasonCode 1100 = Success
  // reasonCode 1134 = Transaction in progress (Pending) - should be success
  // reasonCode 1101+ = Various failure reasons (except 1134)
  if (transactionStatus === 'Declined' || (reasonCode && reasonCode !== '1100' && reasonCode !== '1134' && parseInt(reasonCode) >= 1101)) {
    const failureUrl = new URL('/payment/failure', request.url);
    searchParams.forEach((value, key) => {
      failureUrl.searchParams.set(key, value);
    });
    return NextResponse.redirect(failureUrl, { status: 302 });
  }
  
  // Success case
  const successUrl = new URL('/payment/success', request.url);
  searchParams.forEach((value, key) => {
    successUrl.searchParams.set(key, value);
  });
  
  return NextResponse.redirect(successUrl, { status: 302 });
}

export async function POST(request: NextRequest) {
  try {
    // Handle POST requests from WayForPay
    const formData = await request.formData();
    
    // Extract WayForPay response data
    const transactionStatus = formData.get('transactionStatus') as string;
    const reasonCode = formData.get('reasonCode') as string;
    const orderReference = formData.get('orderReference') as string;
    const amount = formData.get('amount') as string;
    
    console.log('WayForPay POST return:', {
      transactionStatus,
      reasonCode,
      orderReference,
      amount
    });
    
    // Build redirect URL with parameters
    const params = new URLSearchParams();
    if (transactionStatus) params.set('transactionStatus', transactionStatus);
    if (reasonCode) params.set('reasonCode', reasonCode);
    if (orderReference) params.set('orderReference', orderReference);
    
    // Determine redirect destination based on WayForPay response codes
    // reasonCode 1100 = Success
    // reasonCode 1134 = Transaction in progress (Pending) - should be success
    // reasonCode 1101+ = Various failure reasons (except 1134)
    let redirectPath = '/payment/success';
    if (transactionStatus === 'Declined' || (reasonCode && reasonCode !== '1100' && reasonCode !== '1134' && parseInt(reasonCode) >= 1101)) {
      redirectPath = '/payment/failure';
    }
    
    const redirectUrl = new URL(`${redirectPath}?${params.toString()}`, request.url);
    
    // Use 302 redirect to ensure it becomes a GET request
    return NextResponse.redirect(redirectUrl, { status: 302 });
    
  } catch (error) {
    console.error('Error processing WayForPay POST return:', error);
    
    // On error, redirect to failure page
    return NextResponse.redirect(new URL('/payment/failure', request.url), { status: 302 });
  }
}