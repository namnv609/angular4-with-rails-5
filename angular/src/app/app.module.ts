import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router";
import { AppRoutings } from "./app.routings";

import { AppComponent } from './app.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { RegisterComponent } from './components/register/register.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    ControlMessagesComponent,
    RegisterComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
