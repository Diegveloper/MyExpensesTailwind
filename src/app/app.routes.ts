import { Routes } from '@angular/router';
import { PageComponent } from './expenses/page/page.component';

export const routes: Routes = [
    {path: 'expenses', component:PageComponent},
    {path: '**', component:PageComponent}
];
