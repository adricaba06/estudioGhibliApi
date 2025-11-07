import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/films-item-response';

@Injectable({
  providedIn: 'root',
})
export class FilmDetailsService {
  
    constructor(private http: HttpClient) {}

  getFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`https://ghibliapi.vercel.app/films/${id}`);
  }
  
}
