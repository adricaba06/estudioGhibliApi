import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character-item-response/character-item-response';

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailsService {
  
  constructor(private http: HttpClient) {}

  getCharacterId(id: string): Observable<Character> {
    return this.http.get<Character>(`https://ghibliapi.vercel.app/people/${id}`)
  }

}