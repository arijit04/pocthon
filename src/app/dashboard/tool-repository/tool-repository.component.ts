import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainToolList } from '../../model/toolList';

@Component({
  selector: 'app-tool-repository',
  templateUrl: './tool-repository.component.html',
  styleUrls: ['./tool-repository.component.scss']
})
export class ToolRepositoryComponent implements OnInit {

  prefix = '../../../assets/files/';
  toolList = MainToolList;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  goToHistory(id: number): void {
    this.router.navigateByUrl(`tools/history/${id}`);
  }
}
