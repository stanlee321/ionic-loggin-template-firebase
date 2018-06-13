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

	sendPost() {

		let headers = new Headers({ 'Content-Type': 'application/json' });


		let body = new FormData();

		body.append('plate', 'XXXXXXX');
		body.append('phonenumber','5555');
		console.log(body);
		console.log(headers);

		return this.http.post(this.apiurl,JSON.stringify(body))
	}
}