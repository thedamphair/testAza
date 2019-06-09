import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home.component';
import { VinProvider } from '../providers';
import { VinDataComponent } from '../components/vin-data/vin-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VinDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    VinProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
