import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddMovieService } from './service/add-movie.service';
import { UploadImageService } from './service/upload-image.service';
import { HomeService } from './service/home.service';
import { MovieDetailService } from './service/movie-detail.service';
import { EditMovieService } from './service/edit-movie.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';
import { HomeComponent, ConfirmDeleteDialog } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieService } from './service/delete-movie.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    AddMovieComponent,
    MovieDetailComponent,
    EditMovieComponent,
    ConfirmDeleteDialog
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginService,
    AddMovieService,
    UploadImageService,
    HomeService,
    MovieDetailService,
    EditMovieService,
    DeleteMovieService
    ],
  bootstrap: [AppComponent, ConfirmDeleteDialog]
})
export class AppModule { }
