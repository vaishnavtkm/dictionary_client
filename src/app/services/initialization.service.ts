import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  initializeApp(): Observable<any> {
    return of(true).pipe(delay(1880));
  }
  constructor() {}
}
