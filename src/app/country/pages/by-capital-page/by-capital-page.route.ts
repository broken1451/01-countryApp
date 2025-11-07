import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./by-capital-page').then(m => m.ByCapitalPage)
  },
];
export default routes;