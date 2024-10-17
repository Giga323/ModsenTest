import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pages-switcher',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pages-switcher.component.html',
  styleUrl: './pages-switcher.component.scss'
})
export class PagesSwitcherComponent {

  @Output() pageNumberEvent: EventEmitter<number> = new EventEmitter<number>(true)

  tempPage: number = 1
  pagesNumber: number[] = [1, 2, 3, 4]

  switchPage(pageNumber: number): void{
    this.pageNumberEvent.emit(pageNumber)
  }

  switchPagesLeft(): void {
    this.pagesNumber = this.pagesNumber.map((el: number) => el - 1)
  }

  switchPagesRight(): void {
    this.pagesNumber = this.pagesNumber.map((el: number) => el + 1)
  }
}
