import { Routes } from '@angular/router';
import { CharacterPage } from './pages/character-page/character-page';
import { CharacterDetailsComponent } from './components/character-details-component/character-details-component';
import { CharacterDetailsPage } from './pages/character-details-page/character-details-page';

export const routes: Routes = [
    {
        path: 'characters',
        component: CharacterPage
    },

    {
        path: 'character/:id',
        component: CharacterDetailsPage
    }
];
