import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterPage } from './pages/character-page/character-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudioGhibliApi');
}
