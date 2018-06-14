//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';


/*
  Generated class for the FcmProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FcmProvider {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform,
    private http: HttpClient
  ) {}

  // Get permission from the user
  async getToken(uid) {

    let token;
  
    if (this.platform.is('android')) {
      console.log('ANDROID');
      token = await this.firebaseNative.getToken();
      console.log('TOKEN OBJECT', token);
    } 
    return this.saveTokenToFirestore(token,uid)
  }

  // Save the token to firestore
  private saveTokenToFirestore(token, uid) {
    if (!token) return;
  
    const devicesRef = this.afs.collection('devices')
  
    const docData = { 
      token,
      userId: uid,
    }

    return devicesRef.doc(uid).set(docData)
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen();
  }
}
