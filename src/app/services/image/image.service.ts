import { Injectable } from '@angular/core';
import { Size } from '@app/interfaces/size';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  readonly linkPictures: string = 'https://www.artic.edu/iiif/2';
  readonly defaultImageSrc: string = './browser/assets/museum.png';

  constructor() {}

  getImageSrc(imageId: string, size: Size): string {
    return `${this.linkPictures}/${imageId}/full/${size.width},${size.height}/0/default.jpg`;
  }

  onImageSrcError() {
    return this.defaultImageSrc;
  }
}
