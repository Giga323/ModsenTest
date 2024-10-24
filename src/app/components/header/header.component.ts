import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeService } from '@app/services/home/home.service';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHomeComponent = true;

  constructor(private homeService: HomeService) {
    this.homeService.isHomeComponent$.subscribe(response => (this.isHomeComponent = response));
  }
}
