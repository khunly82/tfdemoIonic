import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadComponent: () => import('./pages/product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'scanner',
    loadComponent: () => import('./pages/scanner/scanner.page').then( m => m.ScannerPage)
  },
  {
    path: 'camera',
    loadComponent: () => import('./pages/camera/camera.page').then( m => m.CameraPage)
  },
];
