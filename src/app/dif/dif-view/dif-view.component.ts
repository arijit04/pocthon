import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DifService } from '../../services/dif.service';
import { Dif } from 'src/app/model/dif';

@Component({
  selector: 'app-dif-view',
  templateUrl: './dif-view.component.html',
  styleUrls: ['./dif-view.component.scss']
})
export class DifViewComponent implements OnInit {

  difSearchForm: FormGroup;
  loading: boolean = false;
  difData: Dif;
  showTable: boolean = false;

  constructor(private fb: FormBuilder, private difService: DifService) {}

  ngOnInit(): void {
    this.createSearchForm();
  }

  createSearchForm() {
    this.difSearchForm = this.fb.group({
      searchId: ['', [Validators.required]]
    });
  }

  searchFormSubmit() {
    this.loading = true;
    this.showTable = false;
    this.difService.searchDif(this.difSearchForm.get('searchId').value).subscribe((data: Dif) => {
      this.difData = data;
      this.showTable = true;
    }).add(() => {
      this.loading = false;
    })
  }

}
