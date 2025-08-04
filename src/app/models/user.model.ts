export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'passenger' | 'sacco' | 'owner' | 'queue_manager' | 'driver' | 'support_staff' | 'admin' | 'superuser';
  mfaSecret?: string;
  token?: string; // Added for JWT
}
