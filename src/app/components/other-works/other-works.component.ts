import { Component, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '@app/services/api/api.service';
import { PictureComponent } from '@app/components/picture/picture.component';
import { PictureInfo } from '@app/interfaces/pictureInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-other-works',
  standalone: true,
  imports: [PictureComponent, CommonModule],
  templateUrl: './other-works.component.html',
  styleUrl: './other-works.component.scss',
})
export class OtherWorksComponent implements OnInit, OnDestroy {
  currentWorksSubscription: Subscription | null = null; 
  otherWorks: Signal<PictureInfo[] | undefined> = signal([]);

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.currentWorksSubscription = this.apiService.getOtherPictures().subscribe(response => {
      this.otherWorks = signal<PictureInfo[]>(response.data);
    });
  }

  ngOnDestroy(): void {
    this.currentWorksSubscription?.unsubscribe();
  }
}
