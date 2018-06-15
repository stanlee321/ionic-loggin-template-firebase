import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PostService {
	private apiurl = "https://2wktbyciic.execute-api.us-east-1.amazonaws.com/prod/read-user"
	private getUrl = "https://rh6l4juu0i.execute-api.us-east-1.amazonaws.com/prod/infractor-serve-last-by-gets-to-app"
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
											headers: { 'Content-Type': 'application/json' }
							});
	}

	// let to retrieve last infration from userId input
	getLastAssets(userId:string){
		console.log(userId)
		console.log('THIS USER get', this.getUrl + `?userId=${userId}`)
		return this.http.get(this.getUrl + `?userId=${userId}`)
	}
}