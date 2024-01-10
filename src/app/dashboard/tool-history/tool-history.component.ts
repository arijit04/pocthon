import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TOOLHISTORY } from '../../model/toolHistory';
import { MainToolList } from '../../model/toolList';

@Component({
  selector: 'app-tool-history',
  templateUrl: './tool-history.component.html',
  styleUrls: ['./tool-history.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ToolHistoryComponent implements OnInit {

  toolList = MainToolList;
  toolHistory = TOOLHISTORY;
  selectedToolHistory;
  selectedToolId = 1;
  activeHistoryId;
  toolName = 'Tool Name';
  isHistoryPresent = true;

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line: radix
      this.selectedToolId = parseInt(params.get('id'));
    });
    this.loadSelectedToolHistoryData();
  }

  activeToolVersion(id: number): void {
    this.toastrService.clear();
    const activeHistory = this.selectedToolHistory.history.filter(data => data.active === true)[0];
    activeHistory.active = false;
    const updateActive = this.selectedToolHistory.history.filter(data => data.id === id)[0];
    updateActive.active = true;
    this.activeHistoryId = id;
    this.toastrService.success('Version updated.');
  }

  private loadSelectedToolHistoryData() {
    this.selectedToolHistory = this.toolHistory.filter(data => data.toolId === this.selectedToolId)[0];
    try {
      this.activeHistoryId = this.selectedToolHistory.history.filter(data => data.active === true)[0].id;
    } catch (error) {
      this.isHistoryPresent = false;
    }
    this.toolName = this.toolList.filter(data => data.id === this.selectedToolId)[0].name;
  }

}
