import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./country-page').then(m => m.CountryPage)
  },
];
export default routes;