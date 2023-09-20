import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponentComponent } from '../edit-component/edit-component.component';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { Task1Component } from '../task1/task1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CounterComponent } from '../counter/counter.component';
import { NewComponent } from '../new/new.component';


@NgModule({
  declarations: [
    EditComponentComponent,
    AddMovieFormComponent,
    MovieDetailsPageComponent,
    NewComponent,
    CounterComponent,
    Task1Component],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule,

  ],
})
export class MoviesModule { }
