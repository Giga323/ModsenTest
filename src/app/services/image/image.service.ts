import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly linkPictures: string = 'https://www.artic.edu/iiif/2'

  constructor() { }

  getImage(imageId: number, size: any): string {
    return `${this.linkPictures}/${imageId}/full/${size.width},${size.height}/0/default.jpg`
  }
}
