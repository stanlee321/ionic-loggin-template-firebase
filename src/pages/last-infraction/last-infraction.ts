import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
//import { Infraction } from './models/last.model';
/**
 * Generated class for the LastInfractionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Infraction {
  vidurl: string;
  imgurl: string;
  plate: string;
  dateinfraction:string;
  hourinfraction: string
}

@IonicPage()
@Component({
  selector: 'page-last-infraction',
  templateUrl: 'last-infraction.html',
})
export class LastInfractionPage implements OnInit{

  lastAsset:Infraction;
  private loading;
  display:boolean = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private http_serv: PostService,
     private auth: AuthService,
     private loadingCtrl: LoadingController,
    ){
      this.loading = this.loadingCtrl.create({ content: 'Loading, please wait...' });
      this.loading.present(); 
    }

  goBack(){
    this.navCtrl.pop();
  }
  ngOnInit(): void {

    this.http_serv.getLastAssets(this.auth.currentUserId)
    .subscribe(response => {
      this.lastAsset = response; this.loading.dismiss(); 
      if(this.lastAsset.imgurl) {
        this.display=true
        console.log(this.lastAsset, this.display);
      };
      
    })
    
	}

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LastInfractionPage');
  }

}
