import { Component, input, InputSignal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { ImageService } from '@app/services/image/image.service';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-picture-page',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, NgIf],
  templateUrl: './picture-page.component.html',
  styleUrl: './picture-page.component.scss',
})
export class PicturePageComponent implements OnInit {
  pictureInfo: InputSignal<PictureInfo> = input.required<PictureInfo>()
  imageSrc: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImageSrc(this.pictureInfo().image_id, {
      width: 300,
      height: 400,
    });
  }

  onImageSrcError(): void {
    this.imageSrc = this.imageService.onImageSrcError();
  }
}
