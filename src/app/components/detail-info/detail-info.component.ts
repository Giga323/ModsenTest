import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services/api/api.service';
import { ImageService } from '@app/services/image/image.service';
import { PictureComponent } from '@app/components/picture/picture.component';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-info',
  standalone: true,
  imports: [CommonModule, PictureComponent, AddFavoriteComponent],
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.scss',
})
export class DetailInfoComponent implements OnInit, OnDestroy{
  pictureId!: number;
  pictureInfo!: PictureInfo;
  pictureInfoSubscription: Subscription | null = null;
  imageSrc: string = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.pictureId = params['pictureId'];
    });
    this.pictureInfoSubscription = this.apiService.getPictureInfo(this.pictureId).subscribe(response => {
      this.pictureInfo = response.data;
      this.imageSrc = this.imageService.getImageSrc(this.pictureInfo.image_id, {
        width: 400,
        height: 500,
      });
    });
  }

  onImageSrcError(): void {
    this.imageSrc = this.imageService.onImageSrcError();
  }

  ngOnDestroy(): void {
    this.pictureInfoSubscription?.unsubscribe()
  }
}
