import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpeakDanishService } from '../../services/speak-danish.service';
import { ThemeServiceService } from '../../services/theme-service.service';
import { RouterLink } from '@angular/router';
import { SinglewordComponent } from "../singleword/singleword.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, SinglewordComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private themeService: ThemeServiceService) {}
  toggleTheme() {
    const newTheme =
      this.themeService.getTheme() === 'forest' ? 'lemonade' : 'forest';
    this.themeService.setTheme(newTheme);
  }
}
