import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAehxdHutt3XgqseZfrmr37Ye6FsTU9WiA",
  authDomain: "matatu-social-login.firebaseapp.com",
  projectId: "matatu-social-login",
  storageBucket: "matatu-social-login.firebasestorage.app",
  messagingSenderId: "613546804266",
  appId: "1:613546804266:web:971343748cba8c79a8ef53",
  measurementId: "G-V2RMTX35FC"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
