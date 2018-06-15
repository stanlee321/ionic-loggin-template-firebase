import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';

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

  lastAssets:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private http_serv: PostService,
     private auth: AuthService){
      
      http_serv.getLastAssets(auth.currentUserId)
      .subscribe((response) => console.log(response))
    }

  goBack(){
    this.navCtrl.pop();
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LastInfractionPage');
  }

}
