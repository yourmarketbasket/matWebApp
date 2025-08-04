import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as CryptoJS from 'crypto-js';

// This is a placeholder for the encryption key. In a real app, this should be managed securely.
const AES_KEY = 'SafarEasyKey2024'; // TODO: Use a more secure key management strategy

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  let authReq = req;

  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Per specification, encrypting the payload with AES-256
  // This is an unusual requirement. It's generally better to rely on HTTPS (TLS) for encryption in transit.
  // Implementing this as per the spec.
  if (authReq.method === 'POST' || authReq.method === 'PUT') {
    if (authReq.body) {
      const encryptedBody = CryptoJS.AES.encrypt(JSON.stringify(authReq.body), AES_KEY).toString();
      authReq = authReq.clone({
        body: { payload: encryptedBody } // Wrapping in a 'payload' object as the server will need to know to decrypt it.
      });
    }
  }

  return next(authReq);
};
