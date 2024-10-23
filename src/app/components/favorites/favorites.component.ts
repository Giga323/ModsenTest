import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage/local-storage.service';
import { PictureComponent } from '@app/components/picture/picture.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, PictureComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit{
  favoritePictures: any

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    console.log(localStorage)
    this.favoritePictures = this.localStorageService.getAllItemsFromLocalStorage().map(
      (el) => {
        return JSON.parse(el)
      }
    )
    console.log(this.favoritePictures)
  }
}
