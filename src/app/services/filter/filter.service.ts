import { Injectable } from '@angular/core';
import { SearchInfoItem } from '@app/interfaces/searchInfoItem';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  filterByAlphabet(pictures: SearchInfoItem[]): SearchInfoItem[] {
    return pictures.sort((a: SearchInfoItem, b: SearchInfoItem) => {
      return a.title.localeCompare(b.title)
    });
  }

  filterByDate(pictures: SearchInfoItem[]): SearchInfoItem[] {
    return pictures.sort(
      (a: SearchInfoItem, b: SearchInfoItem) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }
}
