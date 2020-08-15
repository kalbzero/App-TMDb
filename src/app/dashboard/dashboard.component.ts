import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";

import { ApiTmdbService } from '../shared/services/api-tmdb.service';
import { RouteEnum } from '../shared/enum/route-enum';
import { IMovie } from '../shared/interfaces/imovie';
import { Genres } from '../shared/class/genres';
import { Movie } from '../shared/class/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [NgbCarouselConfig]
})
export class DashboardComponent implements OnInit {

  /**
   * NgbCarousel Settings
   */
  showNavigationArrows = true;
  showNavigationIndicators = false;

  /**
   * list of id genres
   */
  listGenres: object[] = [];

  /**
   * list of movies by genre
   */
  listAction: IMovie[] = [];
  listAdventure: IMovie[] = [];
  listAnimation: IMovie[] = [];
  listComedy: IMovie[] = [];
  listCrime: IMovie[] = [];
  listDocumentary: IMovie[] = [];
  listDrama: IMovie[] = [];
  listFamily: IMovie[] = [];
  listFantasy: IMovie[] = [];
  listHistory: IMovie[] = [];
  listHorror: IMovie[] = [];
  listMusic: IMovie[] = [];
  listMystery: IMovie[] = [];
  listRomance: IMovie[] = [];
  listScienceFiction: IMovie[] = [];
  listTVMovie: IMovie[] = [];
  listThriller: IMovie[] = [];
  listWar: IMovie[] = [];
  listWestern: IMovie[] = [];

  constructor(
    private apiTmdbService: ApiTmdbService,
    private router: Router,
    private config: NgbCarouselConfig,
  ) { 
    config.showNavigationArrows = this.showNavigationArrows;
    config.showNavigationIndicators = this.showNavigationIndicators;
  }

  ngOnInit() {
    this.apiTmdbService.getGenres().subscribe(
      (list: Genres) => {
        
        list.genres.forEach( (genre: Genres) => {
          switch (genre.id) {
            case 28: //Action
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listAction = movies.results;}
              );
              break;
            case 12: //Adventure
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listAdventure = movies.results;}
              );
              break;
            case 16:  //Animation
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listAnimation = movies.results;}
              );
              break;
            case 35: //Comedy
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listComedy = movies.results;}
              );
              break;
            case 80: //Crime
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listCrime = movies.results;}
              );
              break;
            case 99: //Documentary
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listDocumentary = movies.results; console.log(movies.results);}
              );
              break;
            case 18: //Drama
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listDrama = movies.results;}
              );
              break;
            case 10751: //Family
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listFamily = movies.results;}
              );
              break;
            case 14: //Fantasy
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listFantasy = movies.results;}
              );
              break;
            case 36: //History
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listHistory = movies.results;}
              );
              break;
            case 27: //Horror
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listHorror = movies.results;}
              );
              break;
            case 10402: //Music
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listMusic = movies.results;}
              );
              break;
            case 9648: //Mystery
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listMystery = movies.results;}
              );
              break;
            case 10749: //Romance
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listRomance = movies.results;}
              );
              break;
            case 878: //Sci-Fi
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listScienceFiction = movies.results;}
              );
              break;
            case 10770: //TV Movie
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listTVMovie = movies.results;}
              );
              break;
            case 53: //Thriller
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listThriller = movies.results;}
              );
              break;
            case 10752: //War
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listWar = movies.results;}
              );
              break;
            case 37: //Western
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: Movie) => { this.listWestern = movies.results;}
              );
              break;
            default:
              console.log(genre);
              break;
          }
        });
      }
    );
  }

  /**
   * Return the url string of the image
   * @param movie - object movie
   */
  getPosterLink(movie: IMovie): string {
    let url = '';
    if(movie.backdrop_path === '' || movie.backdrop_path === null){
      url = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'+movie.poster_path;
    } else {
      url = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces'+movie.backdrop_path;
    }

    // If don't have both, set the default image
    if(movie.poster_path === null && movie.backdrop_path === null) {
      url ='assets/img/noImage.png';
    }
    return url;
  }

  /**
   * Open the Movie Page Infos 
   */
  openMovie(movieId: number) {
    this.router.navigate(['movie/' + movieId]);
  }
}
