import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { Observable, Subscription } from 'rxjs';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  movielist: Array<Movie> = [];
  getMovielist: Subscription | any;
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.loadMoviesData();
  }
  loadMoviesData() {
    this.getMovielist = this.movieService
      .getMovieListFromMockAPI()
      .subscribe((mvList: Movie[]) => {
        this.movielist = mvList;
      });
  }
  ngOnDestroy() {
    // this.getMovielist.unSubscribe();
  }
  // movielist;
  // constructor(movieService: MovieService) {
  //   this.movielist = movieService.getMovieList();
  // }
  removemovie(idx: number) {
    console.log("del")

    this.movielist.splice(idx, 1);
  }
}

