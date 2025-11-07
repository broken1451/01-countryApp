import { Routes } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./layouts/country-layout/country-layout.routes')
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }

];
export default routes;
