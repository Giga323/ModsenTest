import { Component, input, InputSignal} from '@angular/core';
import { LocalStorageService } from '@app/services/local-storage/local-storage.service';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-add-favorite',
  standalone: true,
  imports: [],
  templateUrl: './add-favorite.component.html',
  styleUrl: './add-favorite.component.scss',
})
export class AddFavoriteComponent {
  pictureInfo: InputSignal<PictureInfo> = input.required<PictureInfo>();

  constructor(private localStorageService: LocalStorageService) {}

  toggleFavorite(): void {
    if (this.localStorageService.getItemFromLocalStorage(this.pictureInfo().id)) {
      this.localStorageService.removeItemFromLocalStorage(this.pictureInfo().id);
    } else {
      this.localStorageService.addItemToLocalStorage(this.pictureInfo());
    }
  }
}
