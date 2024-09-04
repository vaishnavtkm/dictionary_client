import { Component, OnInit } from '@angular/core';
import { SpeakDanishService } from '../../services/speak-danish.service';
import { CommonModule } from '@angular/common';
import { DictionaryServiceService } from '../../services/dictionary-service.service';
import { Observable } from 'rxjs';
import { wordResponse } from '../../Models/wordResponse';
import { ActivatedRoute } from '@angular/router';
import { ElevenlabsttsService } from '../../services/elevenlabstts.service';

@Component({
  selector: 'app-singleword',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleword.component.html',
  styleUrl: './singleword.component.scss',
})
export class SinglewordComponent implements OnInit {
  danishText!: string;
  dictionaryWhole!: Observable<any[]>;
  todayData!: wordResponse;
  constructor(
    private speakDanish: SpeakDanishService,
    private dictionaryService: DictionaryServiceService,
    private activatedRoute: ActivatedRoute,
    private elevenlabstts: ElevenlabsttsService
  ) {}
  id!: string | null;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.id = value['id'];
      if (this.id) {
        this.patchValue(this.id);
        this.showItem1 = false;
      } else {
        this.dictionaryWhole = this.dictionaryService.getAllWords();
        const today = this.formatDate(new Date());
        this.dictionaryService.getAllWords().subscribe((data: any[]) => {
          const isTodayInData = data.some((item) => {
            const itemDate = item.date; // Assuming item.dateField contains the date
            if (itemDate === today) {
              this.todayData = item;
              this.danishText = item.dansih_word;
              console.log(this.todayData.date);
            }
          });
        });
      }
    });
    if (!this.id) {
    }
  }
  // selecting a word from the list, patchin the values
  patchValue(id: string) {
    this.dictionaryService.getParticularWord(id).subscribe((res) => {
      console.log('res:    ', res);
      this.todayData = res;
    });
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  showItem1: boolean = true;

  toggleItems() {
    this.showItem1 = !this.showItem1;
  }

  async wordPronounciation() {
    // exising service below:

    // this.speakDanish.speakDanish(this.danishText, 'da-DK');
    const languageCode = 'da';
    const voice_id: string = 'cgSgspJ2msm6clMCkdW9';
    const audioBlob = await this.elevenlabstts.convertTextToSpeech(
      this.todayData.dansih_word,
      voice_id,
    );
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);
    audio.play();
  }

  getAWord(id: string) {}
}
