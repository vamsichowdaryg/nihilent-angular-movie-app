import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent {
  id: string = '';
  movie: any;
  constructor(private router: ActivatedRoute, movieservice: MovieService, private sanitizer: DomSanitizer) {
    const { id } = this.router.snapshot.params;
    this.id = id;
    this.movie = movieservice.getMovieList().find((movie) => movie.id == this.id)
    this.movie.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.movie.trailer);
  }
  show = true;
  toggle() {
    this.show = !this.show
  }
  // gotoMovieDetail() {
  //   this.router.navigate([`/movie/${this.movie.id}`]);
  //   // this.router.navigate([`/movies`, this.movie.id]);
  // }
}
