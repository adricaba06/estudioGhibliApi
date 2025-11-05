import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films-service';
import { Film } from '../../interfaces/films-item-response';
import {FilmListComponent } from '../../components/film-item-component/film-item-component';

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [FilmListComponent],
  templateUrl: './film-page.html',
  styleUrl: './film-page.css',
})
export class FilmPage implements OnInit{

  filmList: Film[] = [];

  constructor(private filmService: FilmsService) {}

 ngOnInit(): void {
  this.filmService.getFilmList().subscribe((resp) => {
    this.filmList = resp;
  });
}

}
