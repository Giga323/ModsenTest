import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@app/services/api/api.service';
import { PictureComponent } from '@app/components/picture/picture.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';

@Component({
  selector: 'app-other-works',
  standalone: true,
  imports: [PictureComponent, CommonModule],
  templateUrl: './other-works.component.html',
  styleUrl: './other-works.component.scss',
})
export class OtherWorksComponent implements OnInit {
  otherWorks!: PictureInfo[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getOtherPictures().subscribe(response => {
      this.otherWorks = response.data;
    });
  }
}
