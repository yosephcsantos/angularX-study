import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { GuestModule } from './guest-module/guest.module';
import { AppRoutesModule } from './app-routes-module/app-routes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    CommonModule,
    GuestModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}