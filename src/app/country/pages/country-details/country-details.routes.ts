import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./country-details').then(m => m.CountryDetails)
  },
];
export default routes;