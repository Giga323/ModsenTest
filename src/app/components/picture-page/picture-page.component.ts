import { Component, Input } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import { AddFavoriteComponent } from '../add-favorite/add-favorite.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-picture-page',
  standalone: true,
  imports: [AddFavoriteComponent, RouterLink, CommonModule],
  templateUrl: './picture-page.component.html',
  styleUrl: './picture-page.component.scss'
})
export class PicturePageComponent {
  @Input() picture!: any
  imageSrc: string = ''

  constructor( 
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.imageSrc = this.imageService.getImage(this.picture.image_id, {width: 300, height: 400})
  }
}
