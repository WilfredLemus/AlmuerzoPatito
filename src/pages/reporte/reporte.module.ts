import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reporte } from './reporte';

@NgModule({
  declarations: [
    Reporte,
  ],
  imports: [
    IonicPageModule.forChild(Reporte),
  ],
  exports: [
    Reporte
  ]
})
export class ReporteModule {}
