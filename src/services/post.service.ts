import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PostService {
	private user: firebase.User;
	private apiurl = "https://2wktbyciic.execute-api.us-east-1.amazonaws.com/prod/read-user"
	constructor(private http: HttpClient) {
	}


	sendPost(data_to_post) {
		//let headers = new Headers({ 'Content-Type': 'application/json' });
		let postData = new FormData();
		postData.append('plate' , data_to_post.plate);
    	postData.append('cellnumber' , data_to_post.cellnumber);
    	postData.append('token' , data_to_post.token);
    
		console.log('SEND TO AWS', postData)
		return this.http.post(this.apiurl, JSON.stringify(data_to_post), {
											headers: { 'Content-Type': 'application/json' }}) ;
	}
}