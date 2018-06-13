import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LastInfractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-last-infraction',
  templateUrl: 'last-infraction.html',
})
export class LastInfractionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LastInfractionPage');
  }

}
