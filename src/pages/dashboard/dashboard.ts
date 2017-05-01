import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoAlmuerzo } from '../nuevo-almuerzo/nuevo-almuerzo';
import { AlmuerzoService } from '../../providers/almuerzo-service';
import { AuthService } from '../../providers/auth-service';
import { MomentModule } from 'angular2-moment/moment.module';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  fecha: any;
  almuerzos: any;
  almuerzo: any;
  configuracion: any;
  Habilitado: boolean;
  Confirmado: boolean;
  userLogin: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _auth: AuthService,
              public almuerzoService: AlmuerzoService) {

    this.userLogin = this._auth.getData();
    this.almuerzoService.getConfiguracion().subscribe(configuracion => {
      this.almuerzoService.getAlmuerzos().subscribe(almuerzos => {
        this.almuerzos = almuerzos;
        this.getAlmuerzoHoy();
      });
      this.fecha = new Date();
      this.configuracion = configuracion;
      this.verficaHorario();
    });
  }

  ionViewDidLoad() {
    
  }

  nuevoAlmuerzo(){
    this.navCtrl.push(NuevoAlmuerzo);
  }

  SiAlmuerzo(){
    // console.log(this.almuerzo);
    this.almuerzoService.confirmaAlmuerzo(this.almuerzo)
    .then(almuerzo => {
      console.log("Confirmado");
      this.Habilitado = false;
      this.Confirmado = true;
      // this.almuerzoService.
    });
  }

  NoAlmuerzo(){

  }

  verficaHorario(){
    if(this.fecha.getHours()<this.configuracion[0].$value && this.fecha.getHours()>this.configuracion[1].$value){
      this.Habilitado = true;
    }else{
      this.Habilitado = false;
    }
  }


  getAlmuerzoHoy(){
    let fechaC = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    for(let almuerzo of this.almuerzos){
      if(almuerzo.fecha == fechaC){
        this.almuerzo = almuerzo
      }
    }
  }

}
