import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    data: {
      nav: true
    }
  },
  {
    path: 'main',
    loadChildren:  './main-page/main.module#MainModule'
  }


];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
