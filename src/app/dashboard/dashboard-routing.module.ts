import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ToolRepositoryComponent } from './tool-repository/tool-repository.component';
import { DashboardGuard } from '../guard/dashboard.guard';
import { ToolHistoryComponent } from './tool-history/tool-history.component';
import { AllowUsersComponent } from './allow-users/allow-users.component';
import { AllowUploadNewVersionComponent } from './allow-upload-new-version/allow-upload-new-version.component';
import { GiveUploadAccessComponent } from './give-upload-access/give-upload-access.component';
import { ToolAccessRequestComponent } from './tool-accessrequest/tool-accessrequest.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent
  },
  {
    path: 'tools/repository',
    component: ToolRepositoryComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'tools/history/:id',
    component: ToolHistoryComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'allow/users',
    component: AllowUsersComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'allow/upload/access',
    component: GiveUploadAccessComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'upload/requests',
    component: AllowUploadNewVersionComponent,
    canActivate: [DashboardGuard]
  },
  {
    path: 'allow/tool/access',
    component: ToolAccessRequestComponent,
    canActivate: [DashboardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
