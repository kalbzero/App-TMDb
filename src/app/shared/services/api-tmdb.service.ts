import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';
import { Itop100 } from '../interfaces/itop100';

@Injectable({
  providedIn: 'root'
})
export class ApiTmdbService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Itop100[]> {
    const httpHeader = new HttpHeaders({ 
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + environment.api_key_read,
    });
    return this.http.get<Itop100[]>( environment.api_url_movie, {headers: httpHeader});
  }

  getById(id: number): Observable<Itop100> {
    const httpHeader = new HttpHeaders({ 
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + environment.api_key_read,
    });
    return this.http.get<Itop100>(environment.api_url_movie+id+'?api_key='+environment.api_key);
  }
}
