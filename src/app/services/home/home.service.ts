import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  isHomeComponent$ = new Subject<boolean>();

  constructor() {}

  changeIsHomeComponent(isHomeComponent: boolean) {
    this.isHomeComponent$.next(!isHomeComponent);
  }
}
