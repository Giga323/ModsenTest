import { Injectable } from '@angular/core';
import { SearchInfoItem } from '@app/interfaces/searchInfoItem';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  filterByAlphabet(pictures: SearchInfoItem[]) {
    return pictures.sort((a: SearchInfoItem, b: SearchInfoItem) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  filterByDate(pictures: SearchInfoItem[]) {
    return pictures.sort(
      (a: SearchInfoItem, b: SearchInfoItem) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }
}
