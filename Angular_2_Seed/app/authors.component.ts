import {Component} from 'angular2/core'; //Decorator
import {AuthorService} from './author.service';

@Component({		// Apply Componet decorator
	selector: 'authors', //Define selector (In this case I chose authors)
	template: `
		<h2>Authors</h2>
		{{ title }}
		<ul>
			<li *ngFor="#author of authors">
				{{ author }}
			</li>
		</ul>
	`,
	providers: [AuthorService]

})
export class AuthorsComponent {
	authors: string[];
	title = "Title for the authors page";

	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}
}