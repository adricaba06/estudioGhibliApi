import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilmListComponent } from "./components/film-list-component/film-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FilmListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('estudioGhibliApi');
}
