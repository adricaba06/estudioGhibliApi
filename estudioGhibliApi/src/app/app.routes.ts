import { Routes } from '@angular/router';

import { FilmPage } from './pages/film-page/film-page';
import { FilmDetailsPage } from './pages/film-details-page/film-details-page';

import { CharacterPage } from './pages/character-page/character-page';
import { CharacterDetailsPage } from './pages/character-details-page/character-details-page';

export const routes: Routes = [
  // pelis
  {
    path: 'films',
    component: FilmPage,
  },
  {
    path: 'film/:id',
    component: FilmDetailsPage,
  },

  // personajes
  {
    path: 'characters',
    component: CharacterPage,
  },
  {
    path: 'character/:id',
    component: CharacterDetailsPage,
  },

  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  }
];

