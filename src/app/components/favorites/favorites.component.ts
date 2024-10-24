import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage/local-storage.service';
import { PictureComponent } from '@app/components/picture/picture.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, PictureComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  favoritePictures: PictureInfo[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.favoritePictures = this.localStorageService.getAllItemsFromLocalStorage();
  }
}
