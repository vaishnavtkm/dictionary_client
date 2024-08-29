import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeakDanishService {
  private voices: SpeechSynthesisVoice[] = [];

  constructor() {
    // Load voices
    window.speechSynthesis.onvoiceschanged = () => {
      this.voices = window.speechSynthesis.getVoices();
      console.log(this.voices);
    };
  }

  speakDanish(text: string, language: string = 'da-DK'): void {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;

    // Ensure voices are loaded
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }

    const danishVoice = this.voices.find((voice) => voice.lang === 'da-DK');

    if (danishVoice) {
      speech.voice = danishVoice;
    }
    speech.pitch = 1.0;
    speech.rate = 0.6;
    speech.volume = 1.0;
    window.speechSynthesis.speak(speech);
  }
}
