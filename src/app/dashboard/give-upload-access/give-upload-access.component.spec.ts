import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveUploadAccessComponent } from './give-upload-access.component';

describe('GiveUploadAccessComponent', () => {
  let component: GiveUploadAccessComponent;
  let fixture: ComponentFixture<GiveUploadAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveUploadAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveUploadAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
