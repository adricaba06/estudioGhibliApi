import { Component, inject, Input, signal } from '@angular/core';
import { Film, FilmsListResponse } from '../../interfaces/films-item-response';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FilmDetailsService } from '../../services/film-details-service';


@Component({
  selector: 'app-film-details-component',
  imports: [],
  templateUrl: './film-details-component.html',
  styleUrl: './film-details-component.css',
})
export class FilmDetailsComponent {
  @Input() film!: Film | null;



}
