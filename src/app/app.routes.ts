import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'home/detail-info',
    loadComponent: () =>
      import('./components/detail-info/detail-info.component').then(m => m.DetailInfoComponent),
  },
  {
    path: 'home/favorites',
    loadComponent: () =>
      import('./components/favorites/favorites.component').then(m => m.FavoritesComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
