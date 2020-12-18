import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ShareModule } from "../nav/share.module";


@NgModule({
  declarations: [DashboardViewComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class DashboardModule { }
