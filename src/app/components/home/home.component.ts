import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { PagesSwitcherComponent } from '../pages-switcher/pages-switcher.component';
import { OtherWorksComponent } from '../other-works/other-works.component';
import { HomeService } from '../../services/home/home.service';
import { ApiService } from '../../services/api/api.service';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { PicturePageComponent } from '../picture-page/picture-page.component';

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
    this.apiService.getPage(pageNumber).subscribe((response) => {
      this.isGalleryLoading = false
      this.currentPagePictures = response.data
    })
  }
}
