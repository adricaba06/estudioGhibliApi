import { Component, inject, OnInit, signal } from '@angular/core';
import { Film } from '../../interfaces/films-item-response';
import { FilmsService } from '../../services/films-service';
import { FilmDetailsService } from '../../services/film-details-service';
import { ActivatedRoute } from '@angular/router';
import { FilmDetailsComponent } from "../../components/film-details-component/film-details-component";

@Component({
  selector: 'app-film-details-page',
  imports: [FilmDetailsComponent],
  templateUrl: './film-details-page.html',
  styleUrl: './film-details-page.css',
})
export class FilmDetailsPage implements OnInit {

  film = signal<Film | null>(null);
  filmId = signal(''); //segun la documentación de clase

  private activatedRoute = inject(ActivatedRoute);
  private filmDetailsService = inject(FilmDetailsService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.filmId.set(id);

      this.filmDetailsService.getFilmById(id).subscribe((resp) => {
        this.film.set(resp);
      });
    });
  }

}
