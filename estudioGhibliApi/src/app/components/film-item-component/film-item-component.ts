import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/films-item-response';
import { FilmsService } from '../../services/films-service';

@Component({
  selector: 'app-film-item-component',
  imports: [],
  templateUrl: './film-item-component.html',
  styleUrl: './film-item-component.css',
  
})
export class FilmListComponent {
  @Input() film!: Film;
}
