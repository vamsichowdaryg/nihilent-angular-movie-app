import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../app.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { FormBuilder, Validators } from '@angular/forms';
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
    rating: 0,
    content: "",
    trailer: ""
  }
  @Input() idx: number = 0;
  @Output() rmmovieidx = new EventEmitter<number>();
  movielist: Object | undefined;
  constructor(private http: HttpClient, private router: Router, private movieService: MovieService, private fb: FormBuilder) { }
  // delmovie() {
  //   console.log("del", this.idx)

  movieForm = this.fb.group({
    id: '1000',
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    src: '',
    content: '',
    trailer: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^http.*")]],
  })
  deleteMovieById() {
    this.movieService.deleteMovieById(this.movie.id).subscribe(() => {
      this.rmmovieidx.emit(this.idx);
    })

    // this.http.delete('https://64f6f41c9d7754084952d88a.mockapi.io/users').subscribe((mvlist) => this.movielist = mvlist)
  }
  show = true;
  toggle() {
    this.show = !this.show
  }
  gotoMovieDetail() {
    this.router.navigate([`/movie/${this.movie.id}`]);
    // this.router.navigate([`/movies`, this.movie.id]);
  }
  updatedMovie() {
    this.router.navigate(['/movies/edit', this.movie.id])
  }
}

