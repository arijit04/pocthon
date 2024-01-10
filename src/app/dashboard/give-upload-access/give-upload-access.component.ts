import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ROLES } from '../../model/roles';
import { MainToolList } from '../../model/toolList';
import { UPLOADACCESSREQUEST } from '../../model/uploadAccessRequests';

@Component({
  selector: 'app-give-upload-access',
  templateUrl: './give-upload-access.component.html',
  styleUrls: ['./give-upload-access.component.scss']
})
export class GiveUploadAccessComponent implements OnInit {

  usersAccessRequests = UPLOADACCESSREQUEST;
  roles = ROLES;
  toolList = MainToolList;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  allowUser(index) {
    if (index > -1) { this.usersAccessRequests.splice(index, 1); }
    this.toastrService.success('User Allowed. Now they can update the tools.');
  }

  rejectUser(index) {
    if (index > -1) { this.usersAccessRequests.splice(index, 1); }
    this.toastrService.error('User Rejected');
  }
  getRole(id) {
    switch (id) {
      case 1:
        return 'Admin';
      case 2:
        return 'Developer';
      case 3:
        return 'Tester';
      case 4:
        return 'System Analyst';
      case 5:
        return 'Business Analyst';
    }
  }

  getToolName(toolId) {
    return this.toolList.filter(tool => tool.id === toolId)[0].name;
  }

}
