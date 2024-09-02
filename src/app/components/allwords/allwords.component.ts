import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { wordResponse } from '../../Models/wordResponse';
import { DictionaryServiceService } from '../../services/dictionary-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-allwords',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './allwords.component.html',
  styleUrl: './allwords.component.scss',
})
export class AllwordsComponent implements OnInit {
  dictionaryWords$!: Observable<wordResponse[]>;

  constructor(private dictionaryService: DictionaryServiceService) {}
  ngOnInit(): void {
    this.dictionaryWords$ = this.dictionaryService.getAllWords();
  }
}
