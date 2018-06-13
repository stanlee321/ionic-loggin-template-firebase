import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LastInfractionPage } from './last-infraction';

@NgModule({
  declarations: [
    LastInfractionPage,
  ],
  entryComponents: [LastInfractionPage],
  imports: [
    IonicPageModule.forChild(LastInfractionPage),
  ],
})
export class LastInfractionPageModule {}
