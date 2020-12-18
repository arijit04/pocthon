import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { difConstants } from '../../constants/DIFConstants';
import { Dif } from 'src/app/model/dif';
import { DifService } from 'src/app/services/dif.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

enum difFormValues {
  FSMAStatus = "fsma_status",
    AXADistributorStatus = "axa_distributor_status",
    DistributorProfileType = "lineofbusiness",
    EnterpriseNumber = "enterprise_number",
    FSMAstatute = "contract_type",
    PartnerType = "activity_type",
    OrgIdentifier = "organization_type",
    Type = "segment_type",
    FSMACertificate = "process_manager_identifier",
    FirstName = "first_name",
    LastName = "last_name",
    Gender = "gender",
    Nationality = "nationality",
    NEON = "ni_number"
}

@Component({
  selector: 'app-dif',
  templateUrl: './dif.component.html',
  styleUrls: ['./dif.component.scss']
})
export class DifComponent implements OnInit {

  @Input() isPrefilled: boolean = false;
  @Input() difData: Dif;

  difForm: FormGroup;
  difFormEnum = difFormValues;
  FSMAStatusType = difConstants.FSMAStatusType;
  AXADistributorStatusType = difConstants.AXADistributorStatusType;
  DistributorProfileTypeOptions = difConstants.DistributorProfileTypeOptions;
  FSMAstatuteType = difConstants.FSMAstatuteType;
  PartnerTypeOptions = difConstants.PartnerTypeOptions;
  OrgIdentifierType = difConstants.OrgIdentifierType;
  TypeOptions = difConstants.TypeOptions;
  FSMACertificateType = difConstants.FSMACertificateType;
  GenderType = difConstants.GenderType;
  saved: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private difService: DifService, private route: ActivatedRoute, private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.createForm();
    if(this.isPrefilled){
      this.difForm.disable();
      this.patchDataWithForm();
    }
    this.route.queryParams.subscribe(params => {
      this.difForm.patchValue({
        [difFormValues.FirstName]: params['first_name'],
        [difFormValues.LastName]: params['last_name'],
        [difFormValues.NEON]: params['ni_number'],
        [difFormValues.EnterpriseNumber]: params['enterprise_number'],
        [difFormValues.FSMAstatute]: params['contract_type']
      });
  });
  }

  createForm() {
    this.difForm = this.fb.group({
      [difFormValues.FSMAStatus]: ['', [Validators.required]],
      [difFormValues.AXADistributorStatus]: ['', [Validators.required]],
      [difFormValues.DistributorProfileType]: ['', [Validators.required]],
      [difFormValues.EnterpriseNumber]: ['', [Validators.required]],
      [difFormValues.FSMAstatute]: ['', [Validators.required]],
      [difFormValues.PartnerType]: ['', [Validators.required]],
      [difFormValues.OrgIdentifier]: ['', [Validators.required]],
      [difFormValues.Type]: ['', [Validators.required]],
      [difFormValues.FSMACertificate]: ['', [Validators.required]],
      [difFormValues.FirstName]: [''],
      [difFormValues.LastName]: [''],
      [difFormValues.Gender]: [''],
      [difFormValues.Nationality]: [''],
      [difFormValues.NEON]: ['']
    });
  }

  formSubmit() {
    this.loading = true;
    const body= {
      [difFormValues.FSMAStatus]: this.difForm.get(difFormValues.FSMAStatus).value,
      [difFormValues.AXADistributorStatus]: this.difForm.get(difFormValues.AXADistributorStatus).value,
      [difFormValues.EnterpriseNumber]: this.difForm.get(difFormValues.EnterpriseNumber).value,
      [difFormValues.OrgIdentifier]: this.difForm.get(difFormValues.OrgIdentifier).value,
      [difFormValues.FSMAstatute]: this.difForm.get(difFormValues.FSMAstatute).value,
      [difFormValues.DistributorProfileType]: this.difForm.get(difFormValues.DistributorProfileType).value,
      employee: [
        {
          [difFormValues.FirstName]: this.difForm.get(difFormValues.FirstName).value,
          [difFormValues.LastName]: this.difForm.get(difFormValues.LastName).value,
          [difFormValues.PartnerType]: this.difForm.get(difFormValues.PartnerType).value,
          [difFormValues.Gender]: this.difForm.get(difFormValues.Gender).value,
          [difFormValues.Nationality]: this.difForm.get(difFormValues.Nationality).value,
          [difFormValues.NEON]: this.difForm.get(difFormValues.NEON).value,
          lvf: 'X'
        }
      ],
      convention: [
        {
          [difFormValues.Type]: this.difForm.get(difFormValues.Type).value,
          [difFormValues.FSMACertificate]: this.difForm.get(difFormValues.FSMACertificate).value,
          created_by: 'Cognizant',
          created_date: new Date(),
          modified_date: new Date(),
          process: [
            {
              status: 'Initiated',
              create_date: new Date()
            }
          ]
        }
      ]
    }
    this.difService.createDif(body).subscribe((responseData)=>{
      this.difData = responseData;
      this.toastrService.success('DIF Convention Created Successfully.', `Created Distributor Id : ${this.difData.distributor_id}`);
      this.saved = true;
    }).add(()=>{
      this.loading = false;
    })
  }

  private patchDataWithForm(){
    this.difForm.patchValue({
      [difFormValues.FSMAStatus]: this.difData.fsma_status,
      [difFormValues.AXADistributorStatus]: this.difData.axa_distributor_status,
      [difFormValues.DistributorProfileType]: this.difData.lineofbusiness,
      [difFormValues.EnterpriseNumber]: this.difData.enterprise_number,
      [difFormValues.FSMAstatute]: this.difData.contract_type,
      [difFormValues.PartnerType]: this.difData.employee[0].activity_type,
      [difFormValues.OrgIdentifier]: this.difData.organization_type,
      [difFormValues.Type]: this.difData.convention[0].segment_type,
      [difFormValues.FSMACertificate]: this.difData.convention[0].process_manager_identifier,
      [difFormValues.FirstName]: this.difData.employee[0].first_name,
      [difFormValues.LastName]: this.difData.employee[0].last_name,
      [difFormValues.Gender]: this.difData.employee[0].gender,
      [difFormValues.Nationality]: this.difData.employee[0].nationality,
      [difFormValues.NEON]: this.difData.employee[0].ni_number,
    });
  }

}
