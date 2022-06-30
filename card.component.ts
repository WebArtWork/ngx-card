import { Component, Input } from '@angular/core';
@Component({
	selector: 'wcard',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() padding: boolean = false;
	@Input() align: string = 'center';
	@Input() image: boolean;
	@Input() title: string;
	@Input() subtitle: string;
	@Input() text: string;

	constructor() { }
}