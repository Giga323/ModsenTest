import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SessionStorageService } from '@app/services/session-storage/session-storage.service';

@Component({
  selector: 'app-pages-switcher',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pages-switcher.component.html',
  styleUrl: './pages-switcher.component.scss'
})
export class PagesSwitcherComponent{

  @Output() pageNumberEvent: EventEmitter<number> = new EventEmitter<number>(true)

  tempPage: number;
  pagesNumber: number[] = [1, 2, 3, 4]

  constructor (
    private sessionStorageService: SessionStorageService
  ) {
    this.tempPage = +this.sessionStorageService.getTempPage()!
  }
  

  switchPage(pageNumber: number): void{
    this.pageNumberEvent.emit(pageNumber)
    this.tempPage = pageNumber
    this.sessionStorageService.setTempPage(this.tempPage)
  }

  switchPagesLeft(): void {
    this.pagesNumber = this.pagesNumber.map((el: number) => el - 1)
  }

  switchPagesRight(): void {
    this.pagesNumber = this.pagesNumber.map((el: number) => el + 1)
  }
}
