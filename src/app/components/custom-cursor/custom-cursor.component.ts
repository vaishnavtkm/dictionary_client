import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  templateUrl: './custom-cursor.component.html',
  standalone: true,
  styleUrls: ['./custom-cursor.component.css'],
})
export class CustomCursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursor!: ElementRef;

  ngAfterViewInit() {
    gsap.set(this.cursor.nativeElement, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', (e) => {
      gsap.to(this.cursor.nativeElement, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
      });
    });
  }
}
