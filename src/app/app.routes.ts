import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./shared/pages/home-page/home-page.routes')
    },
    {
        path: 'country',
         loadChildren: () => import('./country/country.routes')
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];
