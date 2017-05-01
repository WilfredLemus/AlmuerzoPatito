import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class AlmuerzoService {
  almuerzos: FirebaseListObservable<any[]>;
  empleados: FirebaseListObservable<any[]>;
  configuracion: FirebaseListObservable<any[]>;
  almuerzo: FirebaseObjectObservable<any>;
  empleado: FirebaseObjectObservable<any>;
  upAlmuerzo: any;

  constructor(private af: AngularFire) {
    this.almuerzos = this.af.database.list('/almuerzos') as FirebaseListObservable<any>;
    this.empleados = this.af.database.list('/empleados') as FirebaseListObservable<any>;
    this.configuracion = this.af.database.list('/configuracion') as FirebaseListObservable<any>;
  }

  getAlmuerzos(){
    return this.almuerzos;
  }

  getConfiguracion(){
    return this.configuracion;
  }

  // getAlmuerzo(){
  //   this.almuerzo = this.af.database.object('/almuerzos/'+id) as FirebaseObjectObservable<any>;
  //   return this.almuerzo;
  // }
  getAlmuerzoDetails(id){
    this.almuerzo = this.af.database.object('/almuerzos/'+id) as FirebaseObjectObservable<any>;
    return this.almuerzo;
  }

  addAlmuerzo(almuerzo){
    // Create root ref
    this.almuerzos.push(almuerzo);
  }

  editListing(id, almuerzo){
    return this.almuerzos.update(id, almuerzo);
  }

  deleteListing(id){
    return this.almuerzos.remove(id);
  }

  confirmaAlmuerzo(almuerzo){
    this.upAlmuerzo = almuerzo;
    this.upAlmuerzo.confirmados++;
    return this.almuerzos.update(this.upAlmuerzo.$key, this.upAlmuerzo);
  }


  // NeworUpdateEmpleado(empleado, almuerzo){
  //   if(this.getEmpleado){

  //     this.empleados.update(this.empleado.$key, this.empleado);
  //   }
  // }


  // getEmpleado(id){
  //   this.empleado = this.af.database.object('/empelados/'+id);
  //   if(this.empleado){
  //     return true;
  //   }

  //   return false;
  // }



}
