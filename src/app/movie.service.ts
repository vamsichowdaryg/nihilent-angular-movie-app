import { Injectable } from '@angular/core';
import { Movie } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  updateMovie(updatedMovie: Movie) {

    {
      const id = updatedMovie.id;
      return this.http.put(
        `https://64f6f41c9d7754084952d88a.mockapi.io/users/${id}`,
        updatedMovie
      );
    }
  }
  constructor(private http: HttpClient) { }
  getMovieById(id: string) {
    return this.http.get<Movie>(
      `https://64f6f41c9d7754084952d88a.mockapi.io/users/${id}`
    );
  }
  deleteMovieById(id: string) {
    return this.http.delete<Movie>(
      `https://64f6f41c9d7754084952d88a.mockapi.io/users/${id}`
    );
  }
  getMovieListFromMockAPI() {
    return this.http.get<Movie[]>(
      `https://64f6f41c9d7754084952d88a.mockapi.io/users`
    );
  }
  createMovie(newMovie: Movie) {
    return this.http.post('https://64f6f41c9d7754084952d88a.mockapi.io/users', newMovie)
  }
  movielist: Array<Movie> = []

  // constructor() { }
  getMovieList() {
    return this.movielist;
  }
  setMovieList(newMovie: Movie) {
    this.movielist.push(newMovie);
  }
}
