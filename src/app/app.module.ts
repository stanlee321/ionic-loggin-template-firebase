import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { LastInfractionPageModule } from '../pages/last-infraction/last-infraction.module';
import {  AddPlatePageModule } from '../pages/add-plate/add-plate.module';

import { MyApp } from './app.component';

// Own modules
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

// NGX custom debugger
import { NgxErrorsModule } from '@ultimate/ngxerrors';

// Auth service
import { AuthService } from '../services/auth.service';
import { FcmProvider } from '../providers/fcm/fcm';
import { PostService } from '../services/post.service';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireDatabase } from 'angularfire2/database';


import { AngularFireAuthModule } from "angularfire2/auth"

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),

		ComponentsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule,
		LastInfractionPageModule,
		AddPlatePageModule,
		AngularFireModule.initializeApp(firebaseConfig.fire),
		AngularFirestoreModule,	
		AngularFireAuthModule,
		NgxErrorsModule,
		HttpClientModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage
	],
	providers: [
		Config,
		StatusBar,
		AuthService,
		AngularFireAuth,
		AngularFirestore,
		FcmProvider,
		Firebase,
		PostService,
		AngularFireDatabase,
		HttpClient
	]
})
export class AppModule {
}
