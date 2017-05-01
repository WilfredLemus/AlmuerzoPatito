import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoAlmuerzo } from './nuevo-almuerzo';

@NgModule({
  declarations: [
    NuevoAlmuerzo,
  ],
  imports: [
    IonicPageModule.forChild(NuevoAlmuerzo),
  ],
  exports: [
    NuevoAlmuerzo
  ]
})
export class NuevoAlmuerzoModule {}
