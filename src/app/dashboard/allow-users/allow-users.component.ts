import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ROLES } from '../../model/roles';
import { USERACCESSREQUEST } from '../../model/userAccessRequests';

@Component({
  selector: 'app-allow-users',
  templateUrl: './allow-users.component.html',
  styleUrls: ['./allow-users.component.scss']
})
export class AllowUsersComponent implements OnInit {

  usersAccessRequests = USERACCESSREQUEST;
  roles = ROLES;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  allowUser(index) {
    if (index > -1) { this.usersAccessRequests.splice(index, 1); }
    this.toastrService.success('User Allowed');
  }

  rejectUser(index) {
    if (index > -1) { this.usersAccessRequests.splice(index, 1); }
    this.toastrService.error('User Rejected');
  }
  getRole(id) {
    switch (id) {
      case 1:
        return 'Admin';
        break;
      case 2:
        return 'Developer';
        break;
      case 3:
        return 'Tester';
        break;
      case 4:
        return 'System Analyst';
        break;
      case 5:
        return 'Business Analyst';
        break;
    }
  }

}
