import { Component, OnInit } from '@angular/core';

import { ApiTmdbService } from '../shared/services/api-tmdb.service';
import { IMovie } from '../shared/interfaces/imovie';
import { Genres } from '../shared/class/genres';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
  listSienceFiction: IMovie[] = [];
  listTVMovie: IMovie[] = [];
  listThriller: IMovie[] = [];
  listWar: IMovie[] = [];
  listWestern: IMovie[] = [];

  constructor(
    private apiTmdbService: ApiTmdbService
  ) { }

  ngOnInit() {
    this.apiTmdbService.getGenres().subscribe(
      (list: Genres) => {
        
        list.genres.forEach( (genre: Genres) => {
          switch (genre.id) {
            case 28: //Action
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listAction = movies;}
              );
              break;
            case 12: //Adventure
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listAdventure = movies;}
              );
              break;
            case 16:  //Animation
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listAnimation = movies;}
              );
              break;
            case 35: //Comedy
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listComedy = movies;}
              );
              break;
            case 80: //Crime
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listCrime = movies;}
              );
              break;
            case 99: //Documentary
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listDocumentary = movies;}
              );
              break;
            case 18: //Drama
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listDrama = movies;}
              );
              break;
            case 10751: //Family
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listFamily = movies;}
              );
              break;
            case 14: //Fantasy
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listFantasy = movies;}
              );
              break;
            case 36: //History
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listHistory = movies;}
              );
              break;
            case 27: //Horror
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listHorror = movies;}
              );
              break;
            case 10402: //Music
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listMusic = movies;}
              );
              break;
            case 9648: //Mystery
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listMystery = movies;}
              );
              break;
            case 10749: //Romance
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listRomance = movies;}
              );
              break;
            case 878: //Sci-Fi
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listSienceFiction = movies;}
              );
              break;
            case 10770: //TV Movie
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listTVMovie = movies;}
              );
              break;
            case 53: //Thriller
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listThriller = movies;}
              );
              break;
            case 10752: //War
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listWar = movies;}
              );
              break;
            case 37: //Western
              this.apiTmdbService.getMoviesByGenre(genre.id).subscribe(
                (movies: IMovie[]) => { this.listWestern = movies;}
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

}
