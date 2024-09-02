import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { wordResponse } from '../Models/wordResponse';
import { wordRequest } from '../Models/wordRequest';

@Injectable({
  providedIn: 'root',
})
export class DictionaryServiceService {
  constructor(private http: HttpClient) {}
  
  baseUrl: string = 'https://localhost:7167/api/DTE/';
  getAllWords(): Observable<wordResponse[]> {
    return this.http.get<wordResponse[]>(this.baseUrl);
  }

  getParticularWord(id: string): Observable<wordResponse> {
    return this.http.get<wordResponse>(this.baseUrl + id);
  }

  addWord(word: wordRequest): Observable<wordRequest> {
    return this.http.post<wordRequest>(this.baseUrl, word);
  }
}
