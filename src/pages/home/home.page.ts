import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../slide-box/slide-box.page';
import { LastInfractionPage } from '../last-infraction/last-infraction'
import {  AddPlatePage } from '../add-plate/add-plate';
import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { data } from './home-data';

@Component({
	templateUrl: 'home.html',
	providers: []
})
export class HomePage {
	public tiles: Tile[][];

	private nav: Nav;

	constructor(
		private emailService: EmailService,
		private callService: CallService,
		private mapsService: MapsService,
		private browserService: InAppBrowserService,
		nav: Nav
	) {
		this.nav = nav;
		this.initTiles();
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Registrar Placa',
			path: 'registrar-placa',
			icon: 'car',
			component: AddPlatePage
		}, {
			title: 'Ultima Infraccion',
			path: 'last',
			icon: 'image',
			component: LastInfractionPage
		}], [{
			title: 'Todas mis Infraccines',
			path: 'todas',
			icon: 'images',
			component: WordpressListPage
		}]];
	}
}
