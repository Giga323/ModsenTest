import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-favorite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-favorite.component.html',
  styleUrl: './add-favorite.component.scss'
})
export class AddFavoriteComponent {
  @Input() pictureInfo!: any 

  constructor(
    private localStorageService: LocalStorageService 
  ) { }

  toggleFavorite() {
    if (this.localStorageService.getItemFromLocalStorage(this.pictureInfo.id)) {
      this.localStorageService.removeItemFromLocalStorage(this.pictureInfo.id)
    } else {
      this.localStorageService.addItemToLocalStorage(this.pictureInfo)
    }
  }
}
