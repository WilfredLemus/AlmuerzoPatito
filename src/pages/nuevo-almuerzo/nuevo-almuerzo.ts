import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlmuerzoService } from '../../providers/almuerzo-service';


@IonicPage()
@Component({
  selector: 'page-nuevo-almuerzo',
  templateUrl: 'nuevo-almuerzo.html',
})
export class NuevoAlmuerzo {
  fecha: any;
  nombre: any;
  costo: any;
  confirmados: any = 0;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public almuerzoService: AlmuerzoService) {
  }

  ionViewDidLoad() {
    
  }

  AddAlmuerzo(){
    let almuerzo = {
      fecha: this.fecha,
      nombre: this.nombre,
      costo: this.costo,
      confirmados: this.confirmados,
    }

    this.almuerzoService.addAlmuerzo(almuerzo);
  }

}
