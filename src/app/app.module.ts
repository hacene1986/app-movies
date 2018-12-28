import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SinginComponent } from './auth/singin/singin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { AuthGuardService } from './services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'auth/singup', component: SingupComponent},
  {path: 'auth/singin', component: SinginComponent},
  {path: 'movies',canActivate:[AuthGuardService], component: MovieListComponent},
  {path: 'movies/new',canActivate:[AuthGuardService], component: MovieFormComponent},
  {path: 'movies/view/:id',canActivate:[AuthGuardService], component: SingleMovieComponent},
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: '**', redirectTo: 'movies'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    MovieListComponent,
    SingleMovieComponent,
    MovieFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    MoviesService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
