import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  setItem(key: string, value: any, rememberMe: boolean = false): void {
    if (this.isBrowser) {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any | null {
    if (this.isBrowser) {
      let item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    }
  }
}
