import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movie/add', component: AddMovieComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'movie/update/:id', component: EditMovieComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);