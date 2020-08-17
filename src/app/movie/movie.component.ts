import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiTmdbService } from '../shared/services/api-tmdb.service';
import { IMovie } from '../shared/interfaces/imovie';
import { ICast } from '../shared/interfaces/icast';
import { ICrew } from '../shared/interfaces/icrew';
import { Credits } from '../shared/class/credits';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  /**
   * Id of the movie to get infos
   */
  movieId: number;

  /**
   * Movie infos the display in the page
   */
  movie: IMovie;

  /**
   * the movie actors
   */
  cast: ICast[] = [];

  /**
   * the movie directors and others
   */
  crew: ICrew[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private apiTMDBService: ApiTmdbService,
  ) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id
    this.getMovie(this.movieId);
    this.getMovieCredits(this.movieId);
  }

  /**
  * Get the movie infos
  */
  getMovie(id: number) {
    this.apiTMDBService.getMovieById(id).subscribe(
      (movie: IMovie) => {this.movie = movie;}
    );
  }

  /**
   * Get the movie actors
   */
  getMovieCredits(id: number) {
    this.apiTMDBService.getMovieCredits(id).subscribe(
      (credits: Credits) => {this.cast = credits.cast.slice(0,10); 
        credits.crew.forEach( (c: ICrew) => {
          if(c.job == 'Director') {
            this.crew.push(c);
          }
        });
      }
    );
  }

  /**
   * Rate this movie
   */
  rateThisMovie(rate: number) {
    this.apiTMDBService.rateMovie(this.movieId, rate, 0).subscribe(
      (response) => { console.log(response); }
    );
  }
}
