import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { CounterComponent } from './counter/counter.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NewComponent } from './new/new.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    CounterComponent,
    ColorboxComponent,
    BoxComponent,
    NewComponent,
    AddMovieFormComponent,
    MovieDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
