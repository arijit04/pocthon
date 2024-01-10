import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ROLES } from '../../model/roles';
import { MainToolList } from '../../model/toolList';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit, OnDestroy {

  prefix = '../../../assets/files/';
  toolList = MainToolList;

  userDetails;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.loginService.loggedInUser.subscribe((value) => {
        if (!value) {
          this.router.navigateByUrl(`/login`);
        }
        else {
          // this.toastrService.success('User logged in.');
        }
      }));
    this.subscriptions.add(
      this.loginService.userDetails.subscribe((value) => {
        this.userDetails = value;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  checkAccess(id) {
    if (ROLES.admin === this.userDetails.role) {
      return false;
    }
    return !this.userDetails.toolAccessList.includes(id);
  }

  checkUploadAccess(id) {
    if (ROLES.admin === this.userDetails.role) {
      return true;
    }
    return this.userDetails.uploadAccess.includes(id);
  }

  checkUploadAccessWithRunAccess(id) {
    if (ROLES.admin === this.userDetails.role
      || ROLES.sa === this.userDetails.role
      || ROLES.tester === this.userDetails.role || ROLES.ba === this.userDetails.role) {
      return false;
    }
    if (this.checkUploadAccess(id)) {
      return false;
    }
    else {
      if (!this.checkAccess(id)) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  requestUploadAccess() {
    this.toastrService.clear();
    this.toastrService.success('Upload Access Requested.');
  }

  requestAccess() {
    this.toastrService.clear();
    this.toastrService.success('Access Requested.');
  }

}
