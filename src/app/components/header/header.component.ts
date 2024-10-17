import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeService } from '../../services/home/home.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isHomeComponent = true

  constructor(
    private homeService: HomeService
  ) { 
    this.homeService.isHomeComponent$.subscribe((response) => this.isHomeComponent = response)
  }



}
