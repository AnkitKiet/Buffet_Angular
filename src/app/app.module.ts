import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes ,PreloadAllModules} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {FacilityInfoModule} from './facility-info/facility-info.module';
import {ReportsModule} from './reports/reports.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MatProgressBarModule,MatSnackBarModule,MatRippleModule,MatTabsModule,MatCardModule,MatTableModule,MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CdkTableModule} from '@angular/cdk/table';
import { StorageServiceModule} from 'angular-webstorage-service';

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
    ReportsModule,
    FormsModule,
    HttpModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatCardModule,
    MatRippleModule,
    StorageServiceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
