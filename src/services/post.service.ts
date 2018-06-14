import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PostService {
	private user: firebase.User;
	private apiurl = "https://2wktbyciic.execute-api.us-east-1.amazonaws.com/prod/LAMBDA3Posts"
	constructor(private http: HttpClient) {
	}

	sendPost(data_to_post) {
		console.log('SEND TO AWS', data_to_post)
		let headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post(this.apiurl, JSON.stringify(data_to_post))
	}
}