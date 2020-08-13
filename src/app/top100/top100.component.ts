import { Component, OnInit } from '@angular/core';

import { ApiTmdbService } from '../shared/services/api-tmdb.service';

@Component({
  selector: 'app-top100',
  templateUrl: './top100.component.html',
  styleUrls: ['./top100.component.scss']
})
export class Top100Component implements OnInit {

  /**
   * List of the Top Rated 100 movies
   */
  movies: any[];

  constructor(
    private apiTmdbService: ApiTmdbService
  ) { }

  ngOnInit() {
    this.movies = this.apiTmdbService.getTopRated();
  }

}
