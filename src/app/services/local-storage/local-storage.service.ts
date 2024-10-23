import { Injectable } from '@angular/core';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly favoriteField = 'favorites'

  constructor() { }

  getAllItemsFromLocalStorage(): PictureInfo[] {
    return (localStorage[this.favoriteField])
      ? JSON.parse(localStorage[this.favoriteField])
      : JSON.parse('[]')
  }

  getItemFromLocalStorage(pictureId: string): PictureInfo | null {
    const localStorageInfo: PictureInfo[] = this.getAllItemsFromLocalStorage()
    for (const infoRecord of localStorageInfo) {
      if (infoRecord.id === pictureId) {
        return infoRecord
      }
    }
    return null
  }

  addItemToLocalStorage(pictureInfo: PictureInfo) {
    const localStorageInfo: PictureInfo[] = this.getAllItemsFromLocalStorage()
    localStorageInfo.push(pictureInfo)
    localStorage[this.favoriteField] = JSON.stringify(localStorageInfo)
  }

  removeItemFromLocalStorage(pictureId: string) {
    const localStorageInfo: PictureInfo[] = this.getAllItemsFromLocalStorage()
    console.log(localStorageInfo)
    for (const infoRecord of localStorageInfo) {
      if (infoRecord.id === pictureId) {
        localStorageInfo.splice(localStorageInfo.indexOf(infoRecord), 1)
        break
      }
    }
    localStorage[this.favoriteField] = JSON.stringify(localStorageInfo)
  }
}
