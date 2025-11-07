import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../services/films-service';
import { Film } from '../../interfaces/films-item-response';
import {FilmListComponent } from '../../components/film-item-component/film-item-component';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-film-page',
  standalone: true,
  imports: [FilmListComponent, Navbar],
  templateUrl: './film-page.html',
  styleUrl: './film-page.css',
})
export class FilmPage implements OnInit{

  filmList: Film[] = [];

  constructor(private filmService: FilmsService) {} //autowired basicamente

 ngOnInit(): void {
  this.filmService.getFilmList().subscribe((resp) => {
    this.filmList = resp;
  });
}

}
