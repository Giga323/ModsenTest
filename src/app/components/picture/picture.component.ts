import { Component, Input, OnInit } from '@angular/core';
import { AddFavoriteComponent } from '../add-favorite/add-favorite.component';
import { RouterLink } from '@angular/router';
import { ImageService } from '../../services/image/image.service';
import { CommonModule } from '@angular/common';

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
    if (this.picture.title.length > 25) {
      this.picture.title = this.picture.title.slice(0, 25) + '...'
    }
  }
}
