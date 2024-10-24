import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageService } from '@app/services/image/image.service';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, CommonModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
})
export class PictureComponent implements OnInit {
  @Input() picture!: PictureInfo;
  imageSrc: string = '';

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImageSrc(this.picture.image_id, { width: 60, height: 60 });
    if (this.picture.title.length > 18) {
      this.picture.title = this.picture.title.slice(0, 18) + '...';
    }
  }

  onImageSrcError() {
    this.imageSrc = this.imageService.onImageSrcError();
  }
}
