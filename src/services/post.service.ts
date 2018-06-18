import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HttpClient } from '@angular/common/http';
//import { Infraction } from '../pages/last-infraction/models/last.model'
import { Observable } from 'rxjs';


interface Infraction {
	vidurl: string;
	imgurl: string;
	plate: string;
	dateinfraction:string;
	hourinfraction: string
}

@Injectable()
export class PostService {
	private apiurl = "https://2wktbyciic.execute-api.us-east-1.amazonaws.com/prod/read-user"
	private getUrl = "https://rh6l4juu0i.execute-api.us-east-1.amazonaws.com/prod/infracciones"
	private infractions:Infraction[];
	results:Object[];

	constructor(private http: HttpClient) {
		this.results = [];

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
	public getLastAssets(userId:string){
		
		return this.http.get<Infraction>(this.getUrl + `/last?userId=${userId}`)



	}

	private createInfraction(item): Infraction {

		return {
			vidurl: item.vidurl,
			imgurl: item.imgurl,
			plate: item.plate,
			dateinfraction: item.dateinfraction,
			hourinfraction: item.hourinfraction

		};
	};
}