import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films-item-response';
import { FilmsService } from '../../services/films-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-item-component',
  imports: [],
  templateUrl: './film-item-component.html',
  styleUrl: './film-item-component.css',

})
export class FilmListComponent {

  @Input() film!: Film; //buscado en internet  //https://medium.com/williambastidasblog/angular-decoradores-input-y-output-70af5f43a04

  constructor(private router: Router) { }

  navigateToDetails() {
    this.router.navigate(['/film', this.film.id]);
  }

}
