import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowUploadNewVersionComponent } from './allow-upload-new-version.component';

describe('AllowUploadNewVersionComponent', () => {
  let component: AllowUploadNewVersionComponent;
  let fixture: ComponentFixture<AllowUploadNewVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowUploadNewVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowUploadNewVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
