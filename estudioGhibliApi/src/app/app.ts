import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmPage } from '../app/pages/film-page/film-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudioGhibliApi');
}
