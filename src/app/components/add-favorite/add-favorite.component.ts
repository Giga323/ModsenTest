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
    const id = this.pictureInfo().id
    if (this.localStorageService.getItemFromLocalStorage(id)) {
      this.localStorageService.removeItemFromLocalStorage(id);
    } else {
      this.localStorageService.addItemToLocalStorage(this.pictureInfo());
    }
  }
}
