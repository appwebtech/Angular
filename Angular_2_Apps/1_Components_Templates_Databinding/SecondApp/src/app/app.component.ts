//Component is been imported from the Angular2 metadata framework. 
import { Component } from '@angular/core';
import { OtherComponent } from './app.other/component';

// The already imported @Component metadata has an '@' symbol indicating that 
// it's a typescript decorator which permits us to add metadata to it. 
// Metadata is additional info attached to a class to enhance functionality. 
@Component({
  selector: 'app-root',  // This selector is used to render stuff from index.html 
  											 // See this tag '<app-root>Loading...</app-root>' in index.html
  templateUrl: 'app.component.html', // Refers to app.component.html file which holds 
  																			// the html code to be rendered in the selector. 

  styleUrls: ['app.component.css'], //Stylesheets. You can refer to many stylesheets.
  directives: [OtherComponent]

})
// Export is a typescript class exported to be compiled to Javascript.
// The class has a property, "title" which is of type  "string".
export class AppAppComponent {
  title = 'app';
}
