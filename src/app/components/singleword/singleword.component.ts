import { Component } from '@angular/core';
import { SpeakDanishService } from '../../services/speak-danish.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleword',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleword.component.html',
  styleUrl: './singleword.component.scss',
})
export class SinglewordComponent {
  danishText: string = 'afdeling ';

  constructor(private speakDanish: SpeakDanishService) {}
  showItem1: boolean = true;
  toggleItems() {
    this.showItem1 = !this.showItem1;
  }

  wordPronounciation(): void {
    this.speakDanish.speakDanish(this.danishText, 'da-DK');
  }
}
