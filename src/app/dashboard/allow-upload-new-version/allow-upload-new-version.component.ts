import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FILEUPDATEREQUEST } from '../../model/fileNewVersionsRequests';
import { ROLES } from '../../model/roles';
import { MainToolList } from '../../model/toolList';

@Component({
  selector: 'app-allow-upload-new-version',
  templateUrl: './allow-upload-new-version.component.html',
  styleUrls: ['./allow-upload-new-version.component.scss']
})
export class AllowUploadNewVersionComponent implements OnInit {

  fileUpdateRequests = FILEUPDATEREQUEST;
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
