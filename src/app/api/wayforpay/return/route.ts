import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Handle GET requests from WayForPay return
  const searchParams = request.nextUrl.searchParams;
  const transactionStatus = searchParams.get('transactionStatus');
  const reasonCode = searchParams.get('reasonCode');
  const userId = searchParams.get('userId');
  const orderReference = searchParams.get('orderReference');

  console.log('WayForPay GET return:', { transactionStatus, reasonCode, userId });

  // Send Telegram notification if we have user data
  if (userId && orderReference && transactionStatus && reasonCode) {
    try {
      // Get user data
      const { userStorage } = await import('../../../../lib/userStorage');
      const userData = userStorage[userId];

      if (userData) {
        // Send Telegram notification
        await fetch(new URL('/api/telegram-notify', request.url), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId,
            fullname: userData.fullname,
            email: userData.email,
            phone: userData.phone,
            telegram: userData.telegram,
            planName: userData.planName,
            planPrice: userData.planPrice,
            orderReference,
            transactionStatus,
            reasonCode,
            expectations: userData.expectations
          })
        });

        // Update user status
        userData.status = transactionStatus === 'Approved' || reasonCode === '1100' || reasonCode === '1134' ? 'completed' : 'failed';
        userData.updatedAt = new Date().toISOString();
        userData.orderReference = orderReference;
      }
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
    }
  }

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

    // Get userId from URL parameters
    const searchParams = new URL(request.url).searchParams;
    const userId = searchParams.get('userId');

    console.log('WayForPay POST return:', {
      transactionStatus,
      reasonCode,
      orderReference,
      amount,
      userId
    });

    // Send Telegram notification if we have user data
    if (userId && orderReference && transactionStatus && reasonCode) {
      try {
        // Get user data
        const { userStorage } = await import('../../../../lib/userStorage');
        const userData = userStorage[userId];

        if (userData) {
          // Send Telegram notification
          await fetch(new URL('/api/telegram-notify', request.url), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userId,
              fullname: userData.fullname,
              email: userData.email,
              phone: userData.phone,
              telegram: userData.telegram,
              planName: userData.planName,
              planPrice: userData.planPrice,
              orderReference,
              transactionStatus,
              reasonCode,
              expectations: userData.expectations
            })
          });

          // Update user status
          userData.status = transactionStatus === 'Approved' || reasonCode === '1100' || reasonCode === '1134' ? 'completed' : 'failed';
          userData.updatedAt = new Date().toISOString();
          userData.orderReference = orderReference;
        }
      } catch (error) {
        console.error('Error sending Telegram notification:', error);
      }
    }
    
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