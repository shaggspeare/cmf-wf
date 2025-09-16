import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { userStorage, UserData } from '../../../lib/userStorage';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['fullname', 'email', 'phone', 'telegram', 'planName', 'planPrice'];
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      );
    }

    // Generate unique user ID
    const userId = uuidv4();

    // Store user data with timestamp
    const userData: UserData = {
      id: userId,
      fullname: body.fullname,
      email: body.email,
      phone: body.phone,
      telegram: body.telegram,
      expectations: body.expectations || '',
      planName: body.planName,
      planPrice: body.planPrice,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };

    userStorage[userId] = userData;

    console.log('User data stored:', userData);

    return NextResponse.json({
      success: true,
      userId: userId,
      message: 'User information stored successfully'
    });

  } catch (error) {
    console.error('Checkout API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json(
      { success: false, error: 'User ID is required' },
      { status: 400 }
    );
  }

  const userData = userStorage[userId];

  if (!userData) {
    return NextResponse.json(
      { success: false, error: 'User not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    user: userData
  });
}

