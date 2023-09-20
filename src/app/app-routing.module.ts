import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorboxComponent } from './colorbox/colorbox.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeMsgComponent },
  { path: 'films', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'color-game', component: ColorboxComponent },
  // {
  //   path: 'movie',
  //   children: [
  //     { path: '', component: NewComponent, pathMatch: 'full' },
  //     { path: 'add', component: AddMovieFormComponent },
  //     { path: 'edit/:id', component: EditComponentComponent },
  //     { path: ':id', component: MovieDetailsPageComponent }]
  // },
  { path: 'movie', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
