import { AppMaterialModules } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as d3 from 'd3';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts'; // this is needed!

import { DatagridComponent } from './datagrid/datagrid.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { D3barchartComponent } from './d3barchart/d3barchart.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,

    AppMaterialModules
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    DatagridComponent,
    AdminComponent,
    SidebarComponent,
    D3barchartComponent,
    DetailsComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
