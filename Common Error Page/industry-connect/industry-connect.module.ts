import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndustryConnectRoutingModule } from './industry-connect-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MaterialModule } from 'src/app/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ConnectedIndustryDetailsComponent } from './connected-industry-details/connected-industry-details.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    LandingPageComponent,
    ConnectedIndustryDetailsComponent
  ],
  imports: [
    CommonModule,
    IndustryConnectRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxMatSelectSearchModule,
    NgxSpinnerModule
  ]
})
export class IndustryConnectModule { }
