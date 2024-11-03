import { Component, input, InputSignal, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ImageService } from '@app/services/image/image.service';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, NgIf],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
})
export class PictureComponent implements OnInit {
  picture: InputSignal<PictureInfo> = input.required<PictureInfo>();
  imageSrc: string = '';
  readonly titleLength: number = 18;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImageSrc(this.picture().image_id, { width: 60, height: 60 });
    if (this.picture().title.length > this.titleLength) {
      this.picture().title = this.picture().title.slice(0, this.titleLength) + '...';
    }
  }

  onImageSrcError(): void {
    this.imageSrc = this.imageService.onImageSrcError();
  }
}
