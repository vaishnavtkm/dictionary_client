import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CalendarModule } from 'primeng/calendar';
import { DictionaryServiceService } from '../../services/dictionary-service.service';
import { wordRequest } from '../../Models/wordRequest';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-add-word',
  standalone: true,
  imports: [
    FormsModule,
    ColorPickerModule,
    CommonModule,
    CalendarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-word.component.html',
  styleUrl: './add-word.component.scss',
  providers:[DatePipe]
})
export class AddWordComponent implements OnInit {
  constructor(private SendService: DictionaryServiceService,
    private datePipe: DatePipe
  ) {}

  Danish_word = new FormControl('', Validators.required);
  Pronounciation = new FormControl('', Validators.required);
  English_word = new FormControl('', Validators.required);
  Meaning = new FormControl('', Validators.required);
  Date = new FormControl('', Validators.required);

  PostForm = new FormGroup({
    Danish_word: this.Danish_word,
    Pronounciation: this.Pronounciation,
    English_word: this.English_word,
    Meaning: this.Meaning,
    Date: this.Date
  });
  ngOnInit(): void {}

  onPost()
  {
    if(this.PostForm.valid)
    {
      const formattedDate = this.datePipe.transform(this.PostForm.value.Date, 'dd/MM/yyyy');
      const fromData: wordRequest = {
        date: formattedDate || '',
        dansih_word: String(this.PostForm.value.Danish_word),
        pronounciation: String (this.PostForm.value.Pronounciation),
        english_word:String (this.PostForm.value.English_word),
        meaning: String(this.PostForm.value.Meaning)
      }
      console.log(this.PostForm.value);
      this.SendService.addWord(fromData)
      .pipe(
        catchError((err) => {
          console.log('Error: ', err);
          return of(null);
        })
      )
      .subscribe((data) => {
        console.log('Data: ', data);
        alert('Word Added Successfully');
      });
    this.PostForm.reset();
    }
  }

}




