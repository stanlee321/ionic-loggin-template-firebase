import { Component } from '@angular/core';

@Component({
	templateUrl: 'slide-box.html'
})
export class SlideBoxPage {
	public items: any[];

	constructor() {
		this.items = this.generateItems(7);
	}

	private generateItems(n: number): any {
		let items = [{image:"https://s3.amazonaws.com/demscloud.deepmicrosystems.com/testimages/Montecinos/febrero/2018-02-04_reporte/08-46-44_amarillo_directo_x1_-_4438XSG_100/2018-02-04_08-46-44_0wm.jpg"},
		{image:"https://s3.amazonaws.com/demscloud.deepmicrosystems.com/testimages/Montecinos/febrero/2018-02-04_reporte/08-46-44_amarillo_directo_x1_-_4438XSG_100/2018-02-04_08-46-44_1wm.jpg"}
	];
		/*
		for (let i = 0; i < n; i++) {
			items.push({
				image: 'http://lorempixel.com/g/786/1024/city/' + i + '/'
			});
		}*/

		return items;
	}
}
