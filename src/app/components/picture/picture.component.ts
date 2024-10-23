import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageService } from '@app/services/image/image.service';
import { AddFavoriteComponent } from '@app/components/add-favorite/add-favorite.component';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, CommonModule],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss'
})
export class PictureComponent implements OnInit{
  @Input() picture!: any
  imageSrc: string = ''

  constructor( 
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImage(this.picture.image_id, {width: 60, height: 60})
    if (this.picture.title.length > 20) {
      this.picture.title = this.picture.title.slice(0, 20) + '...'
    }
  }
}
