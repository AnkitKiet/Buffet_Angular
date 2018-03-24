import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {FacilityInfoModule} from './facility-info/facility-info.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatProgressBarModule,MatSnackBarModule,MatRippleModule,MatTabsModule,MatCardModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    DashboardModule,
    FacilityInfoModule,
    FormsModule,
    HttpModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatRippleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
