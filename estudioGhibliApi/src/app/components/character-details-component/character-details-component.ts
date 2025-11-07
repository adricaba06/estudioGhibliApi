import { Component, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character-item-response/character-item-response';

@Component({
  selector: 'app-character-details-component',
  imports: [],
  templateUrl: './character-details-component.html',
  styleUrl: './character-details-component.css',
})
export class CharacterDetailsComponent {

  @Input() character! : Character | null;

}
