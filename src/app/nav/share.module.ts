import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { NavViewComponent } from "../nav/nav-view/nav-view.component";



@NgModule({
  declarations: [NavViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [NavViewComponent]
})
export class ShareModule { }
