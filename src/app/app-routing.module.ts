import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { Task1Component } from './task1/task1.component';
import { NewComponent } from './new/new.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';

const routes: Routes = [
  { path: 'color-game', component: ColorboxComponent },
  { path: 'movie', component: NewComponent },
  { path: 'movie-form', component: AddMovieFormComponent },
  { path: 'movie/:id', component: MovieDetailsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
