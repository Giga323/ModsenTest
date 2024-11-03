import { NgFor, NgIf } from '@angular/common';
import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss',
})
export class FilterMenuComponent {
  optionEvent: OutputEmitterRef<string> = output<string>();

  isMenuOpen: boolean = false;
  options: string[] = ['by alphabet', 'by date'];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  chooseOption(option: string): void {
    this.optionEvent.emit(option);
  }
}
