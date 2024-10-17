import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PictureComponent } from '../picture/picture.component';
import { AddFavoriteComponent } from '../add-favorite/add-favorite.component';
import { ApiService } from '../../services/api/api.service';
import { ImageService } from '../../services/image/image.service';

@Component({
  selector: 'app-detail-info',
  standalone: true,
  imports: [
    CommonModule,
    PictureComponent,
    AddFavoriteComponent
  ],
  templateUrl: './detail-info.component.html',
  styleUrl: './detail-info.component.scss'
})
export class DetailInfoComponent implements OnInit{

  pictureId!: number
  pictureInfo!: any
  imageSrc: string = ''

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.pictureId = params['pictureId']
    })
    this.apiService.getPictureInfo(this.pictureId).subscribe((response) => {
      this.pictureInfo = response.data
      console.log(this.pictureInfo)
      this.imageSrc = this.imageService.getImage(this.pictureInfo.image_id, {width: 400, height: 500})
    })
  }
}
