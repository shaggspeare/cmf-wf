// Shared user storage for checkout data
// In production, this should be replaced with a proper database

export interface UserData {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  telegram: string;
  expectations: string;
  planName: string;
  planPrice: string;
  createdAt: string;
  status: 'pending' | 'completed' | 'failed';
  updatedAt?: string;
  orderReference?: string;
}

// In-memory storage (replace with database in production)
export const userStorage: { [key: string]: UserData } = {};