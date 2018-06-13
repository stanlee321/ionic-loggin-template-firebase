import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
import { ComponentsListPage } from '../pages/components/list/components.list.page';
import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';

import { HomePage } from '../pages/home/home.page';
import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { LoginPage } from '../pages/login/login';

// Service
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';

// Provider
import { FcmProvider } from '../providers/fcm/fcm';

// Notifications services
import { ToastController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { log } from 'util';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	@ViewChild(Nav) nav: Nav;

	constructor(
		private app: App,
		private platform: Platform,
		private menu: MenuController,
		private statusBar: StatusBar,
		private auth: AuthService,
		private post_service: PostService,
		private fcm: FcmProvider, private toastCtrl: ToastController){
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' }
			//{ title: 'Mis Infracciones', component: ComponentsListPage, icon: 'grid' }
			//{ title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
			//{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			//{ title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			// Get a FCM token
			//this.fcm.getToken()

			// Listen to incoming messages
			this.fcm.listenToNotifications().pipe(
				tap(msg => {
					// show a toast
					const toast = this.toastCtrl.create({
						message: msg.body,
						duration: 3000
					});
					toast.present();
				})
			).subscribe()
		});
	  
		this.auth.afAuth.authState
		  .subscribe(
			user => {
			  if (user) {
				this.fcm.getToken(this.auth.currentUserId)
				this.rootPage = HomePage;
			  } else {
				this.rootPage = LoginPage;
				}
			},
			() => {
			  this.rootPage = LoginPage;
			}
		  );
	}

	
	login() {
		this.menu.close();
		  this.auth.signOut();
		  this.nav.setRoot(LoginPage);
	}
	logout() {
		this.menu.close();
		this.auth.signOut();
		this.nav.setRoot(HomePage);
	}

	openPage(page) {
		this.menu.close();
		this.nav.setRoot(page.component);
	}
}
