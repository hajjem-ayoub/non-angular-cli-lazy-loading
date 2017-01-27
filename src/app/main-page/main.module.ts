import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import {FirstNestedComponent} from "./first-nested/first-nested.component";
import {SecondNestedComponent} from "./second-nested/second-nested.component";
import {mainModuleRouting} from "./main.routing";

@NgModule({
  declarations: [
    MainPageComponent,
    FirstNestedComponent,
    SecondNestedComponent
  ],
  imports: [
    mainModuleRouting
  ],
  providers: []
})
export class MainModule { }
