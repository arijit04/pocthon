import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AllowUploadNewVersionComponent } from './allow-upload-new-version/allow-upload-new-version.component';
import { AllowUsersComponent } from './allow-users/allow-users.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { GiveUploadAccessComponent } from './give-upload-access/give-upload-access.component';
import { ToolAccessRequestComponent } from './tool-accessrequest/tool-accessrequest.component';
import { ToolHistoryComponent } from './tool-history/tool-history.component';
import { ToolRepositoryComponent } from './tool-repository/tool-repository.component';



@NgModule({
  declarations: [
    DashboardViewComponent,
    ToolRepositoryComponent,
    ToolHistoryComponent,
    AllowUsersComponent,
    GiveUploadAccessComponent,
    AllowUploadNewVersionComponent,
    ToolAccessRequestComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
