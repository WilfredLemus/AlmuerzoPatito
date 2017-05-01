import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Configuracion } from './configuracion';

@NgModule({
  declarations: [
    Configuracion,
  ],
  imports: [
    IonicPageModule.forChild(Configuracion),
  ],
  exports: [
    Configuracion
  ]
})
export class ConfiguracionModule {}
