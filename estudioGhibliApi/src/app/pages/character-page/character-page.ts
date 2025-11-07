import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character-item-response/character-item-response';
import { CharacterItemComponent } from '../../components/character-item-component/character-item-component';

@Component({
  selector: 'app-character-page',
  imports: [CharacterItemComponent],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css'
})
export class CharacterPage implements OnInit{
  
  characterList: Character[] = [];

  constructor(private characterService: CharacterService){}

  ngOnInit(): void {
    this.characterService.getCharacterList().subscribe((response) => {
      this.characterList = response
    });
  }

}
