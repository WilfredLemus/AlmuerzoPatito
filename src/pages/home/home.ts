import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoAlmuerzo } from '../nuevo-almuerzo/nuevo-almuerzo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nuevoAlmuerzo(){
    this.navCtrl.push(NuevoAlmuerzo);
  }

  confirmarAlmuerzo(){

  }

}
