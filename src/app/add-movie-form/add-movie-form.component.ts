import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {
  movieForm = this.fb.group({
    id: '1000',
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    src: '',
    content: '',
    trailer: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^http.*")]],
  });
  // id: string = "";
  // trailer: string = "";
  // src: string = "";
  // name: string = "";
  // rating: number = 0;
  // content: string = " ";


  movielist;
  constructor(private movieService: MovieService, private Router: Router, private fb: FormBuilder) {
    this.movielist = movieService.getMovieList();
  }
  // movies(event: any) {
  //   console.log("adding movie....", event.target.value)
  //   // this.movie = event.target.value
  // }
  get name() {
    return this.movieForm?.get('name');
  }
  get trailer() {
    return this.movieForm?.get('trailer')
  }

  addmovie() {
    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      console.log(newMovie);
      // this.movieService.setMovieList(newMovie as Movie);
      this.movieService.createMovie(newMovie as Movie).subscribe(() => {
        this.Router.navigate(["/movie"])
      })
      // const newMovie: Movie = {
      //   id: this.id,
      //   name: this.name,
      //   src: this.src,
      //   rating: this.rating,
      //   content: this.content,
      //   trailer: this.trailer
      // };
      // this.movieService.setMovieList(newMovie)


    }
    // removemovie(i: any) {
    //   console.log("del")
    //   this.movielist.splice(i, 1)
    // }
  }
}
