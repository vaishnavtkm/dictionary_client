import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-add-word',
  standalone: true,
  imports: [CalendarModule,FormsModule],
  templateUrl: './add-word.component.html',
  styleUrl: './add-word.component.scss',
})
export class AddWordComponent {
}
