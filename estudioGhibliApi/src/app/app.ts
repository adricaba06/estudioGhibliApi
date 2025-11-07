import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FilmPage } from './pages/film-page/film-page';
import { CharacterPage } from './pages/character-page/character-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmPage, CharacterPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudioGhibliApi');
}
