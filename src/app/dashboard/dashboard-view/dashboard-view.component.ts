import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  prefix = '../../../assets/files/';
  toolList = [
    {
      name: 'Tool 1',
      fileUrl: 'tool1.xls',
      maualLink: 'manual',
      icon: 'book'
    },
    {
      name: 'Tool 2',
      fileUrl: 'excel Link',
      maualLink: 'manual',
      icon: 'book'
    },
    {
      name: 'Tool 3',
      fileUrl: 'excel Link',
      maualLink: 'manual',
      icon: 'book'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
