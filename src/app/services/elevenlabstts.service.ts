import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ElevenlabsttsService {
  private apiKey = 'sk_2e1a287765972f683e5afddb1756a1f5fe86ce1587cd4c6a';
  private voicesUrl = 'https://api.elevenlabs.io/v1/voices';
  private ttsUrl = `https://api.elevenlabs.io/v1/text-to-speech`;
  constructor() {}
  async getVoices(): Promise<any> {
    const response = await axios.get(this.voicesUrl, {
      headers: {
        Accept: 'application/json',
        'xi-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  async convertTextToSpeech(text: string, voiceId: string): Promise<Blob> {
    const response = await axios.post(
      `${this.ttsUrl}/${voiceId}/stream`,
      {
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8,
          style: 0.0,
          use_speaker_boost: true,
        },
      },
      {
        headers: {
          Accept: 'application/json',
          'xi-api-key': this.apiKey,
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      }
    );

    return response.data;
  }
}
