import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from '@app/services/home/home.service';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, RouterLink, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHomeComponent = true;

  constructor(private homeService: HomeService) {
    this.homeService.isHomeComponent$.subscribe(response => (this.isHomeComponent = response));
  }
}
