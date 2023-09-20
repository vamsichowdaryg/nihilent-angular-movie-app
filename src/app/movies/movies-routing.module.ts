import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { NewComponent } from '../new/new.component';

const routes: Routes = [
  { path: '', component: NewComponent, pathMatch: 'full' },
  { path: 'add', component: AddMovieFormComponent },
  { path: 'edit/:id', component: EditComponentComponent },
  { path: ':id', component: MovieDetailsPageComponent }]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
