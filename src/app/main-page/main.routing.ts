import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page.component";
import {FirstNestedComponent} from "./first-nested/first-nested.component";
import {SecondNestedComponent} from "./second-nested/second-nested.component";



const mainRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'first',  component:  FirstNestedComponent },
      { path: 'second',  component: SecondNestedComponent }
    ]
  }


];

export const mainModuleRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);
