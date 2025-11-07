import { Component, inject, OnInit, signal } from '@angular/core';
import { Character } from '../../interfaces/character-item-response/character-item-response';
import { ActivatedRoute } from '@angular/router';
import { CharacterDetailsComponent } from '../../components/character-details-component/character-details-component';
import { CharacterDetailsService } from '../../services/character-details-service';

@Component({
  selector: 'app-character-details-page',
  imports: [CharacterDetailsComponent],
  templateUrl: './character-details-page.html',
  styleUrl: './character-details-page.css',
})
export class CharacterDetailsPage implements OnInit {
  
  character = signal<Character | null>(null);
  characterId = signal ('');

  private activatedRoute = inject(ActivatedRoute)
  private characterDetailsService = inject(CharacterDetailsService)
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.characterId.set(id);

      this.characterDetailsService.getCharacterId(id).subscribe((response) => {
        this.character.set(response)
      })

    });
  }

}