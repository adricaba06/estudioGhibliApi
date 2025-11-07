import { Routes } from '@angular/router';
import { FilmPage } from './pages/film-page/film-page';
import { FilmDetailsPage } from './pages/film-details-page/film-details-page';

export const routes: Routes = [

      {
    path: 'films',
    component: FilmPage,
  },

  {
    path: 'film/:id', component: FilmDetailsPage 
  }


  
];

/*import { Routes } from '@angular/router';
import { UserProfile } from './user-profile/user-profile';
const routes: Routes = [
  { path: 'user/:id', component: UserProfile }
];*/ 

//Mirar