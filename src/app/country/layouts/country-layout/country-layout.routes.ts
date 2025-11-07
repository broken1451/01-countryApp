import { Routes } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./country-layout').then(m => m.CountryLayout),
        children: [
            {
                path: 'by-capital',
                loadChildren: () => import('../../pages/by-capital-page/by-capital-page.route')
            },
            {
                path: 'by-country',
                loadChildren: () => import('../../pages/country-page/country-page.routes')
            },
            {
                path: 'by-region',
                loadChildren: () => import('../../pages/region-page/region-page.routes')
            },
            {
                path: 'by/:code',
                loadChildren: () => import('../../pages/country-details/country-details.routes')
            },
            {
                path: '**',
                redirectTo: 'by-capital',
                pathMatch: 'full'
            }
        ]
    }

];
export default routes;
