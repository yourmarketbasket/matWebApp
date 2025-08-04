export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'passenger' | 'sacco' | 'owner' | 'queue_manager' | 'driver' | 'support_staff' | 'admin' | 'superuser';
  password?: string; // For signup only
  mfaSecret?: string;
  token?: string; // Added for JWT
}
