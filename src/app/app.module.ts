import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Dashboard } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { NuevoAlmuerzo } from '../pages/nuevo-almuerzo/nuevo-almuerzo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service';
import { AlmuerzoService } from '../providers/almuerzo-service';

import { AngularFireModule } from 'angularfire2';
import { MomentModule } from 'angular2-moment';

export const firebaseConfig = {
  apiKey: "AIzaSyDvf7QnY4fFTeRR493rNxmSMM0O1jqmcMY",
  authDomain: "almuerzopatito.firebaseapp.com",
  databaseURL: "https://almuerzopatito.firebaseio.com",
  projectId: "almuerzopatito",
  storageBucket: "almuerzopatito.appspot.com",
  messagingSenderId: "137945401666"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Dashboard,
    NuevoAlmuerzo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Dashboard,
    NuevoAlmuerzo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AlmuerzoService
  ]
})
export class AppModule {}
