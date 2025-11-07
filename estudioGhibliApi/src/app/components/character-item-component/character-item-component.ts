import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character-item-response/character-item-response';

@Component({
  selector: 'app-character-item-component',
  imports: [],
  templateUrl: './character-item-component.html',
  styleUrl: './character-item-component.css'
})
export class CharacterItemComponent {
  @Input() character!: Character;
}
