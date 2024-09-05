import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SinglewordComponent } from './components/singleword/singleword.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { CalendarModule } from 'primeng/calendar';
import { LineanimeComponent } from './lineanime/lineanime.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { InitializationService } from './services/initialization.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageComponent,
    SinglewordComponent,
    AddWordComponent,
    CalendarModule,
    LineanimeComponent,
    CustomCursorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'dictionary_client';

  constructor(private initializationService: InitializationService) {}
  isLoading = true;

  ngOnInit(): void {
    this.initializationService.initializeApp().subscribe(() => {
      this.isLoading = false;
    });
  }
}
