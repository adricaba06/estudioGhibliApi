import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interfaces/character-item-response/character-item-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  constructor(private http: HttpClient){}

  getCharacterList(): Observable<CharacterListResponse>{
    return this.http.get<CharacterListResponse>('https://ghibliapi.vercel.app/people')
  }

}
