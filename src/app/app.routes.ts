import { Routes } from '@angular/router';
import { PageComponent } from './expenses/page/page.component';
import { AnalyticsPageComponent } from './analytics/analytics.page/analytics.page.component';

export const routes: Routes = [
    {path: 'expenses', component:PageComponent},
    {path: 'analytics', component:AnalyticsPageComponent},
    {path: '**', component:PageComponent}
];
