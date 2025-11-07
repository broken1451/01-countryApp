import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./region-page').then(m => m.CountryReginPage)
  },
];
export default routes;