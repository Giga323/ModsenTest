import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageService } from '@app/services/image/image.service';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-picture-page',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, CommonModule],
  templateUrl: './picture-page.component.html',
  styleUrl: './picture-page.component.scss',
})
export class PicturePageComponent implements OnInit {
  @Input() picture!: PictureInfo;
  imageSrc: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImageSrc(this.picture.image_id, {
      width: 300,
      height: 400,
    });
  }

  onImageSrcError() {
    this.imageSrc = this.imageService.onImageSrcError();
  }
}
