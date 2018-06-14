import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';


import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the AddPlatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-plate',
  templateUrl: 'add-plate.html',
})
export class AddPlatePage {
  signupError: string;
  form: FormGroup;
  

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private fb: FormBuilder,
     private post_service: PostService,
     private auth: AuthService
  ) {
    this.form = fb.group({
			plate: ['', Validators.compose([Validators.required])],
		});
  }

  onSubmit() {
    let plate = this.form.value;
    let userItems: any = this.auth.getItemsList;
    console.log(plate)
    console.log('THIS', userItems )

    let credentials = {
			plate: plate.plate,
      cellnumber: userItems.userId,
      token: userItems.token
    };
    
    this.post_service.sendPost(credentials).subscribe((response) => {
      console.log('RESPONSE IS ', response);
    })

    /*
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
    );
    */
  }
}
