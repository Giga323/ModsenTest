import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { PictureComponent } from '../picture/picture.component';

@Component({
  selector: 'app-other-works',
  standalone: true,
  imports: [
    PictureComponent,
    CommonModule
  ],
  templateUrl: './other-works.component.html',
  styleUrl: './other-works.component.scss'
})
export class OtherWorksComponent implements OnInit{

  otherWorks!: any

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getOtherPictures().subscribe((response) => {
      this.otherWorks = response.data
    })
  }
}
