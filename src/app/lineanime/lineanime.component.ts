import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { ThemeServiceService } from '../services/theme-service.service';
@Component({
  selector: 'app-lineanime',
  standalone: true,
  imports: [],
  templateUrl: './lineanime.component.html',
  styleUrl: './lineanime.component.scss',
})
export class LineanimeComponent {
  /**
   *
   */
  constructor(private themeService: ThemeServiceService) {}

  clrname!: string;

  ngOnInit(): void {

    this.updateStrokeColor();
    this.observeThemeChanges();
    this.animateSvg();
    this.changeThemeWithDelay();
  }
  updateStrokeColor(): void {
    const theme = this.themeService.getTheme();
    this.clrname = theme === 'forest' ? 'white' : 'black';
  }

  observeThemeChanges(): void {
    const observer = new MutationObserver(() => {
      this.updateStrokeColor();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }
  animateSvg(): void {
    const letters = [
      '#letter8 path',
      '#letter7 path',
      '#letter6 path',
      '#letter5 path',
      '#letter4 path',
      '#letter3 path',
      '#letter2 path',
      '#letter1 path',
    ];

    letters.forEach((letter, index) => {
      anime({
        targets: letter,
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function (el, i) {
          return i * 250;
        }, // Adjust delay to ensure one letter finishes before the next starts
        direction: 'normal',
        loop: false,
      });
    });
  }
  changeThemeWithDelay(): void {
    setTimeout(() => {
      // const newTheme = this.themeService.getTheme() === 'forest' ? 'white' : 'dark';
      this.updateStrokeColor();
    }, 3000); // Change theme after 3 seconds
  }
}
