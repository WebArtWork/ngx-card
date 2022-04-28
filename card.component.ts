import { Component, Input } from '@angular/core';
@Component({
	selector: 'wcard',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() align = 1;
	constructor() { }
}
