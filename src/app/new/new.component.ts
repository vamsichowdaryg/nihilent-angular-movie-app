import { Component } from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  // movie = {
  //   src: "",
  //   moviename: "",
  //   rating: "",
  //   content: " "

  // };
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

  // movies(event: any) {
  //   console.log("adding movie....", event.target.value)
  //   // this.movie = event.target.value
  // }
  // addmovie(event: any) {
  //   this.movielist.push(this.movie)

  // }

  movielist;
  constructor(movieService: MovieService) {
    this.movielist = movieService.getMovieList();
  }
  removemovie(idx: number) {
    console.log("del")
    this.movielist.splice(idx, 1);
  }
}

