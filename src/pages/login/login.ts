import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  error: any;
  form: any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private loadingCtrl: LoadingController, 
              private _auth: AuthService) {

    this.form = {
      email: '',
      password: ''
    }
  }

  ionViewDidLoad() {

  }

  loginWithEmail() {
    let loading = this.loadingCtrl.create({
      content: 'Espera porfavor...'
    });
    loading.present();

    this._auth.loginWithEmail(this.form).subscribe(data => {
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      }, 1000);
    }, err => {
      console.log(err);
      setTimeout(() => {
        loading.dismiss();
        this.error = err;
      }, 1000);
    });
  }

}
