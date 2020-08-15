import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiTmdbService } from '../shared/services/api-tmdb.service';
import { IMovie } from '../shared/interfaces/imovie';


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

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private apiTMDBService: ApiTmdbService,
  ) { }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id
    this.getMovie(this.movieId);
  }
  /**
  * Get the movie infos
  */
  getMovie(id: number) {
    this.apiTMDBService.getMovieById(id).subscribe(
      (movie: IMovie) => {this.movie = movie; console.log(movie);}
    );
  }

  /**
   * Go back to preview page
   */
  goBack() {
    this.location.back();
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
