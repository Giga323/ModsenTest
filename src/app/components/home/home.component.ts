import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit, Signal, signal} from '@angular/core';
import { PictureComponent } from '@app/components/picture/picture.component';
import { PagesSwitcherComponent } from '@app/components/pages-switcher/pages-switcher.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '@app/services/api/api.service';
import { HomeService } from '@app/services/home/home.service';
import { OtherWorksComponent } from '@app/components/other-works/other-works.component';
import { PicturePageComponent } from '@app/components/picture-page/picture-page.component';
import { SearchComponent } from '@app/components/search/search.component';
import { SessionStorageService } from '@app/services/session-storage/session-storage.service';
import { PictureInfo } from '@app/interfaces/pictureInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    PictureComponent,
    PagesSwitcherComponent,
    OtherWorksComponent,
    RouterLink,
    SearchComponent,
    PicturePageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentPagePictures: Signal<PictureInfo[] | undefined> = signal([]);
  isGalleryLoading: boolean = true;
  currentPage!: Subscription;

  constructor(
    private homeService: HomeService,
    private apiService: ApiService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.homeService.changeIsHomeComponent(true);
    this.getPage(+this.sessionStorageService.getTempPage()!);
  }

  getPage(pageNumber: number): void {
    this.isGalleryLoading = true;
    this.currentPagePictures = signal([])
    this.currentPage = this.apiService.getPage(pageNumber).subscribe(response => {
      this.isGalleryLoading = false;
      this.currentPagePictures = signal<PictureInfo[]>(response.data.map((el: PictureInfo) => {
        el['title'] = el['title'].length > 20 ? el['title'].slice(0, 20) + '...' : el['title'];
        return el;
      }));
    });
  }

  ngOnDestroy(): void {
    this.homeService.changeIsHomeComponent(false);
    this.currentPage?.unsubscribe()
  }
}
