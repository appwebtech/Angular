import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FoodComponent} from './food.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Hello Angular</h1>
    <courses></courses>
    <authors></authors>
		<food></food>
    `,
    directives: [CoursesComponent, AuthorsComponent, FoodComponent]
})
export class AppComponent { }