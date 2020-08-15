import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, forkJoin } from "rxjs";

import { environment } from '../../../environments/environment';
import { Itop100 } from '../interfaces/itop100';
import { User } from '../interfaces/user';
import { IMovie } from '../interfaces/imovie';
import { Movie } from '../class/movie';
import { Genres } from '../class/genres';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Create the Guest User to Rate the movie.
   */
  createGuestSession(): Observable<User> {
    return this.http.get<User>(environment.api_v3_url+'authentication/guest_session/new?api_key='+environment.api_key);
  }

  /**
   * Get the movie infos.
   * @param id - movie id
   */
  getMovieById(id: number): Observable<IMovie> {
    return this.http.get<IMovie>(environment.api_v3_url+'movie/'+id+'?api_key='+environment.api_key);
  }

  /**
   * Get the movies of that genre
   * @param id_genre - id of the genre
   */
  getMoviesByGenre(id_genre: number): Observable<Movie> {
    return this.http.get<Movie>(environment.api_v3_url+'discover/movie?api_key='+environment.api_key+'&with_genres='+id_genre);
  }

  /**
   * Get the list of thr genres
   */
  getGenres(): Observable<Genres> {
    return this.http.get<Genres>( environment.api_v3_url+'genre/movie/list?api_key='+environment.api_key);
  }

  /**
   * Get the Top Rated 100 Movies.
   * The URL get 20 movies per page.
   */
  getTopRated(): object[] {
    let page1: Observable<Itop100> = this.http.get<Itop100>(environment.api_v3_url+'movie/top_rated?api_key='+environment.api_key+'&page=1');
    let page2: Observable<Itop100> = this.http.get<Itop100>(environment.api_v3_url+'movie/top_rated?api_key='+environment.api_key+'&page=2');
    let page3: Observable<Itop100> = this.http.get<Itop100>(environment.api_v3_url+'movie/top_rated?api_key='+environment.api_key+'&page=3');
    let page4: Observable<Itop100> = this.http.get<Itop100>(environment.api_v3_url+'movie/top_rated?api_key='+environment.api_key+'&page=4');
    let page5: Observable<Itop100> = this.http.get<Itop100>(environment.api_v3_url+'movie/top_rated?api_key='+environment.api_key+'&page=5');
    let movies: object[] = [];

    forkJoin([page1, page2, page3, page4, page5]).subscribe(
      (results) => {
        results.forEach( list => {
          list.results.forEach( movie => {
            movies.push(movie);
          });
        });
       }
    );

    return movies;
  }

  /**
   * Save the rate make by Guest User in a movie.
   * 
   * @param movie_id - movie id
   * @param value - the rate
   * @param guest_session_id - the guest user 
   */
  rateMovie(movie_id: number, value: number, guest_session_id: number) {
    const url = environment.api_v3_url+'movie/' + movie_id +'/rating?api_key='+environment.api_key+'&guest_session_id='+guest_session_id;
    const header = new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8');
    const body =  'value' + value;

    return this.http.post(url, body, {headers: header});
  }
}
