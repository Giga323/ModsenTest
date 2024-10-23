import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageService } from '@app/services/image/image.service';

@Component({
  selector: 'app-search-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss'
})
export class SearchItemComponent implements OnInit {

  @Input() itemInfo!: any
  imageSrc: string = ''

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit(): void {
    this.getImage()
  }

  getImage() {
    this.imageSrc = this.imageService.getImage(this.itemInfo.image_id, {width: 40, height: 40})
  }
}
