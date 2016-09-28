import {Component} from 'angular2/core'
import {FoodService} from './food.service'

@Component({
	selector: 'food',
	template: `
		<h2>Food</h2>
		{{ title }}
		<ul>
			<li *ngFor="#food of food">
				{{ food }}
			</li>
		</ul>
	`,
	providers: [FoodService]
})
export class FoodComponent {
	title = "My Favourite Foods";
	foods;

	constructor(foodService: FoodService){
		this.food = foodService.getFood();
	}
}