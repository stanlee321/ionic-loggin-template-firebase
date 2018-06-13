import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPlatePage } from './add-plate';

@NgModule({
  declarations: [
    AddPlatePage,
  ],
  imports: [
    IonicPageModule.forChild(AddPlatePage),
  ],
})
export class AddPlatePageModule {}
