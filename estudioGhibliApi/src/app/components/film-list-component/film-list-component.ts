import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films-list-response';
import { FilmsService } from '../../services/films-service';

@Component({
  selector: 'app-film-list-component',
  imports: [],
  templateUrl: './film-list-component.html',
  styleUrl: './film-list-component.css'
})
export class FilmListComponent implements OnInit {
  filmList: Film[] = [];
  constructor(private filmsService: FilmsService){}

 ngOnInit(): void {
  this.filmsService.getFilmList().subscribe((resp) => {
    this.filmList = resp;
  });
}


}
