import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  @Input() movie: Movie = {
    id: '',
    src: "",
    name: "",
    rating: "",
    content: "",
    trailer: ""
  }
  @Input() idx: number = 0;
  @Output() rmmovieidx = new EventEmitter<number>();

  delmovie() {
    console.log("del", this.idx)
    this.rmmovieidx.emit(this.idx);
  }
  show = true;
  constructor(private router: Router) { }
  toggle() {
    this.show = !this.show
  }
  gotoMovieDetail() {
    this.router.navigate([`/movie/${this.movie.id}`]);
    // this.router.navigate([`/movies`, this.movie.id]);
  }
}
