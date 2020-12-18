import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DifRoutingModule } from './dif-routing.module';
import { DifComponent } from './dif/dif.component';
import { DifViewComponent } from './dif-view/dif-view.component';



@NgModule({
  declarations: [DifComponent, DifViewComponent],
  imports: [
    DifRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DifModule {}
