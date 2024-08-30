import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SinglewordComponent } from './components/singleword/singleword.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent,SinglewordComponent,AddWordComponent,CalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dictionary_client';
}
