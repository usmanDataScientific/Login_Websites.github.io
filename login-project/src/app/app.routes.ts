import { Routes } from '@angular/router';
import { LoginsingupComponent } from './page/loginsingup/loginsingup.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  
     {
        path: '',
        redirectTo: 'loginsingup',
        pathMatch: 'full'
     },

   {
    path: 'loginsingup',
    component: LoginsingupComponent
   },
  {
   path: '',
   component: LayoutComponent,
   children:
   [
      {
         path: 'dashboard',
         component: DashboardComponent
      }
   ]
  }
  
];
