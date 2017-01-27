import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AlertModule, AlertConfig} from "ng2-bootstrap/index";
import "rxjs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    AlertModule,
    HttpModule
  ],
  providers:[AlertConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
