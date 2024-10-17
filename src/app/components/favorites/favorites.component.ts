import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { PictureComponent } from '../picture/picture.component';

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
