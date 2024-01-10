import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TOOLACCESSREQUEST } from '../../model/toolAccessRequest';
import { ROLES } from '../../model/roles';
import { MainToolList } from '../../model/toolList';

@Component({
  selector: 'app-tool-accessrequest',
  templateUrl: './tool-accessrequest.component.html',
  styleUrls: ['./tool-accessrequest.component.scss']
})
export class ToolAccessRequestComponent implements OnInit {

  fileUpdateRequests = TOOLACCESSREQUEST;
  roles = ROLES;
  toolList = MainToolList;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  allowUser(index) {
    if (index > -1) { this.fileUpdateRequests.splice(index, 1); }
    this.toastrService.success('Tool updated with the new version.');
  }

  rejectUser(index) {
    if (index > -1) { this.fileUpdateRequests.splice(index, 1); }
    this.toastrService.error('Tool Upload Request Rejected');
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
