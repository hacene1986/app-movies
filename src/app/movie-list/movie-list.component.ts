import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  movies: Movie[];
  moviesSubscription: Subscription;
  constructor(private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit() {
    this.moviesSubscription = this.moviesService.moviesSubject.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    this.moviesService.getMovies();
    this.moviesService.emitMovies();
  }


 onNewMovie(){
   this.router.navigate(['/movies', 'new']);
 } 
 
 onDeleteMovie(movie: Movie){
   this.moviesService.removeMovie(movie);
 }

 onViewMovie(id: number){
   this.router.navigate(['/movies', 'view', id]);
 }

 ngOnDestroy(){
   this.moviesSubscription.unsubscribe();
 }
 
}
