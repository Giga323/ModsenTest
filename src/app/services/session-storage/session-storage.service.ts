import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  readonly tempPageField = 'tempPage';

  constructor() {}

  getTempPage() {
    return sessionStorage[this.tempPageField] ? sessionStorage.getItem(this.tempPageField) : '1';
  }

  setTempPage(pageNumber: number): void {
    sessionStorage.setItem(this.tempPageField, pageNumber.toString());
  }
}
