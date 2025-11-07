import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsListResponse } from '../interfaces/films-item-response';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient){}

  getFilmList(): Observable<FilmsListResponse>{
    return this.http.get<FilmsListResponse>('https://ghibliapi.vercel.app/films')
  }
  
}
