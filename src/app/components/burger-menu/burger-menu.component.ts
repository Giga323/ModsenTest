import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from '@app/services/home/home.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  isHomeComponent: boolean = true;
  isMenuActive: boolean = false;

  constructor(private homeService: HomeService) {
    this.homeService.isHomeComponent$.subscribe(response => (this.isHomeComponent = response));
  }

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}
