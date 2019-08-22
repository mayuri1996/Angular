import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailureDirective } from './comp-failure.directive';
@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
