import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  readonly linkPictures: string = 'https://www.artic.edu/iiif/2';
  readonly defaultImageSrc: string = '../../../assets/museum.png'

  constructor() { }

  getImageSrc(imageId: number, size: any): string {
    return `${this.linkPictures}/${imageId}/full/${size.width},${size.height}/0/default.jpg`
  }

  onImageSrcError() {
    return this.defaultImageSrc
  }
}
