import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;
  isDarkTheme = false;
  private isBrowser: boolean;

  constructor(
    public authService: AuthService,
    private router: Router,
    private storageService: StorageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });

    if (this.isBrowser) {
      // Check for saved theme preference
      this.isDarkTheme = this.storageService.getItem('theme') === 'dark';
      this.applyTheme();
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.storageService.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isBrowser) {
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  }
}
