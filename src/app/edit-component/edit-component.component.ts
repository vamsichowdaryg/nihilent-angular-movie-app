import { Component, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent {
  id: string = '';


  movieForm = this.fb.group({
    id: '1000',
    name: ['', [Validators.required, Validators.minLength(5)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
    src: '',
    content: '',
    trailer: ['', [Validators.required, Validators.minLength(5), Validators.pattern("^http.*")]],
  })

  constructor(private movieService: MovieService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) {
    const { id } = this.route.snapshot.params;
    this.id = id;
  }
  ngOnInit() {
    this.movieService.getMovieById(this.id).subscribe((mv) => {
      this.movieForm.patchValue(mv as Movie)
    });
  }
  get name() {
    return this.movieForm?.get('name');
  }
  get trailer() {
    return this.movieForm?.get('trailer')
  }
  updatedMovie() {
    console.log(this.movieForm.status);

    if (this.movieForm.valid) {
      const updatedMovie = this.movieForm.value;
      console.log(updatedMovie);
      // this.movieService.updateMovie(updatedMovie as Movie);
      // programmatically change
      this.movieService.updateMovie(updatedMovie as Movie).subscribe(() => {
        this.router.navigate(['/movie']);
        // this.router.navigate(['/movie']);
      })
    }
  }
}
