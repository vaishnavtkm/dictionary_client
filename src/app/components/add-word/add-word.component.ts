import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CalendarModule } from 'primeng/calendar';
import { DictionaryServiceService } from '../../services/dictionary-service.service';
import { wordRequest } from '../../Models/wordRequest';


@Component({
  selector: 'app-add-word',
  standalone: true,
  imports: [FormsModule,ColorPickerModule,CommonModule,CalendarModule, ReactiveFormsModule],
  templateUrl: './add-word.component.html',
  styleUrl: './add-word.component.scss',
})
export class AddWordComponent implements OnInit {
  constructor(private SendService: DictionaryServiceService) { }

  Danish_word = new FormControl('', Validators.required);
  Pronounciation = new FormControl('', Validators.required);
  English_word = new FormControl('', Validators.required);
  Meaning = new FormControl('', Validators.required);
  date = new FormControl('', Validators.required);

  PostForm = new FormGroup({
    Danish_word: this.Danish_word,
    Pronounciation: this.Pronounciation,
    English_word: this.English_word,
    Meaning: this.Meaning,
    date: this.date
  });
  ngOnInit(): void {
  }

  onPost()
  {
    if(this.PostForm.valid)
    {
      const fromData: wordRequest = {
        date: this.PostForm.value.date,
        Dansih_word: this.PostForm.value.Danish_word,
        Pronounciation: this.PostForm.value.Pronounciation,
        English_word: this.PostForm.value.English_word,
        Meaning: this.PostForm.value.Meaning
      }
      console.log(this.PostForm.value);
      this.SendService.addWord(fromData).subscribe((data) => {
        console.log(data);
      });
    }
  }

}




