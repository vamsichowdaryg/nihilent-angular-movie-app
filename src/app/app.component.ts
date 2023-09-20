import { Component } from '@angular/core';

type Movie = {
  name: string;
  src: string;
  rating: number;
  id: string;
  trailer: string;
  content: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {
  title = ' ';
}
export { Movie, AppComponent }