import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { wordResponse } from '../../Models/wordResponse';
import { DictionaryServiceService } from '../../services/dictionary-service.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allwords',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './allwords.component.html',
  styleUrl: './allwords.component.scss',
})
export class AllwordsComponent implements OnInit {
  dictionaryWords$!: Observable<wordResponse[]>;
  sortedWords$!: Observable<wordResponse[]>;

  constructor(
    private dictionaryService: DictionaryServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const dictionaryWords$ = this.dictionaryService.getAllWords();

    this.sortedWords$ = dictionaryWords$.pipe(
      map((items) =>
        items.sort(
          (b, a) =>
            this.parseDate(a.date).getTime() - this.parseDate(b.date).getTime()
        )
      )
    );
  }
  parseDate(date: string): Date {
    const [day, month, year] = date.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
  openWord(id: string) {
    this.router.navigate([`/singleword/${id}`]);
  }
}
