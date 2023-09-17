import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {
  id: string = "";
  trailer: string = "";
  src: string = "";
  name: string = "";
  rating: number = 0;
  content: string = " ";

  // movielist = [{
  //   src: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //   moviename: "The Avengers",
  //   rating: "⭐9.2",
  //   content: "A labourer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process"
  // },
  // {
  //   src: "https://www.koimoi.com/wp-content/new-galleries/2022/01/pushpa-to-cross-250-crore-mark-today-001.jpg",
  //   moviename: "pushpa",
  //   rating: "⭐9.2",
  //   content: "A labourer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process"
  // },
  // {
  //   src: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //   moviename: "Jai Bhim",
  //   rating: "⭐9.2",
  //   content: "A labourer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process"
  // },
  // {
  //   src: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //   moviename: "Iron man 2",
  //   rating: "⭐9.2",
  //   content: "A labourer rises through the ranks of a red sandal smuggling syndicate, making some powerful enemies in the process"
  // }]
  movielist;
  constructor(private movieService: MovieService, private Router: Router) {
    this.movielist = movieService.getMovieList();
  }
  movies(event: any) {
    console.log("adding movie....", event.target.value)
    // this.movie = event.target.value
  }
  addmovie() {
    const newMovie: Movie = {
      id: this.id,
      name: this.name,
      src: this.src,
      rating: this.rating,
      content: this.content,
      trailer: this.trailer
    };
    this.movieService.setMovieList(newMovie)
    this.Router.navigate(["/movie"])

  }
  removemovie(i: any) {
    console.log("del")
    this.movielist.splice(i, 1)
  }
}
