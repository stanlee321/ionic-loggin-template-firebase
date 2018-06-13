import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';

}

export const firebaseConfig = {
	fire:{
		apiKey: "AIzaSyDd4uCZVx4gv4he1gOJEqW2CZw38X-M1FI",
		authDomain: "infractor-d5010.firebaseapp.com",
		databaseURL: "https://infractor-d5010.firebaseio.com",
		projectId: "infractor-d5010",
		storageBucket: "infractor-d5010.appspot.com",
		messagingSenderId: "341594814314"
	}
};