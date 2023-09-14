import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { CounterComponent } from './counter/counter.component';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    CounterComponent,
    ColorboxComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
