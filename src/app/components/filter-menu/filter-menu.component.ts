import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss'
})
export class FilterMenuComponent {
  @Output() optionEvent: any = new EventEmitter<string>(true)

  isMenuOpen: boolean = false
  options: string[] = ['by alphabet', 'by date']

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  chooseOption(option: string) {
    this.optionEvent.emit(option)
  }
}
