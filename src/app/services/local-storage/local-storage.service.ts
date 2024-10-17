import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getAllItemsFromLocalStorage() {
    let items: any[] = []
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        items.push(localStorage[key])
      }
    }
    return items
  }

  getItemFromLocalStorage(pictureId: string) {
    return localStorage.getItem(pictureId)
  }

  addItemToLocalStorage(pictureInfo: any) {
    console.log(pictureInfo)
    localStorage.setItem(pictureInfo.id, JSON.stringify(pictureInfo))
  }

  removeItemFromLocalStorage(pictureId: string) {
    localStorage.removeItem(pictureId)
  }
}
