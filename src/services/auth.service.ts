import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs';


export class Item {
    body: any;
    body2:any;
    body3:any;
  }
//export interface Items { token: string; userId:string }

//export interface Item { name: string; }

@Injectable()
export class AuthService {
	private user: firebase.User;
    private userDetails: firebase.User = null;
    
    //items: AngularFireList<Item[]> = null;
    userId: string;
    response_data: any;

    //
    //private itemsCollection: AngularFirestoreCollection<Item>;
    //private itemsCollection: AngularFirestoreCollection<Items>; //Firestore collection
    private itemDoc: AngularFirestoreDocument<Item>;
    items: Observable<Item>;

	constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth, private afs: AngularFirestore) {
		afAuth.authState.subscribe(user => {
            this.user = user;
            if (this.user){
                this.userDetails = user;
                //this.itemsCollection = afs.collection<Item>('items');
                //this.items = this.itemsCollection.valueChanges();

                this.itemDoc = this.afs.doc<Item>(`devices/${this.currentUserId}`); //ref()
                this.items = this.itemDoc.valueChanges()
                this.items.subscribe(res=>{
                   this.response_data = res;})
            }else{
                this.userDetails = null;
            }
		});
    }
    

    // Returns true if user is logged in
   
    // Returns current user UID
    get currentUserId(): string {
        return this.authenticated ? this.userDetails.uid : '';
    }

    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
        return this.userDetails.displayName || this.userDetails.email; 
    }


    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    get getItemsList():  Observable<Item> {
        //if (!this.currentUserId) return;
        //this.items = this.db.list(`devices/${this.currentUserId}`);
        return this.response_data;
    }


    // Sign up details
	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
    }

    signUp(credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }
    get authenticated(): boolean {
        return this.user !== null;
    }
    getEmail() {
        return this.user && this.user.email;
    }
    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }


    signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
    }

    private oauthSignIn(provider: AuthProvider) {
        if (!(<any>window).cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        } else {
            return this.afAuth.auth.signInWithRedirect(provider)
            .then(() => {
                return this.afAuth.auth.getRedirectResult().then( result => {
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    let token = result.credential.accessToken;
                    // The signed-in user info.
                    let user = result.user;
                    console.log(token, user);
                }).catch(function(error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    }
}