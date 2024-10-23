import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PictureComponent } from '@app/components/picture/picture.component';
import { PagesSwitcherComponent } from '@app/components/pages-switcher/pages-switcher.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '@app/services/api/api.service';
import { HomeService } from '@app/services/home/home.service';
import { OtherWorksComponent } from '@app/components/other-works/other-works.component';
import { PicturePageComponent } from '@app/components/picture-page/picture-page.component';
import { SearchComponent } from '@app/components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PictureComponent,
    PagesSwitcherComponent,
    OtherWorksComponent,
    RouterLink,
    SearchComponent,
    PicturePageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy{
  currentPagePictures: any = []
  isGalleryLoading: boolean = true

  constructor(
    private homeService: HomeService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.homeService.changeIsHomeComponent(true)
    this.getPage(1)
  }

  ngOnDestroy(): void {
    this.homeService.changeIsHomeComponent(false)
  }

  getPage(pageNumber: number): void {
    this.isGalleryLoading = true
    this.currentPagePictures = []
    this.apiService.getPage(pageNumber).subscribe((response) => {
      this.isGalleryLoading = false
      this.currentPagePictures = response.data
      this.currentPagePictures = this.currentPagePictures.map((el: any) => {
        el['title'] = (el['title'].length > 20) ? el['title'].slice(0, 20) + '...' : el['title']
        return el
      })
    })
  }
}
