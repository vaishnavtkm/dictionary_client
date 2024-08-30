import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpeakDanishService } from '../../services/speak-danish.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  
}
