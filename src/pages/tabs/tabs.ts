import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { AuthService } from '../../providers/auth-service';

import { Login } from '../login/login';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Dashboard;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController, 
              af: AngularFire, 
              private _auth: AuthService) {
    if(!this._auth.authenticated){
      this.navCtrl.setRoot(Login);
    }
  }
}
