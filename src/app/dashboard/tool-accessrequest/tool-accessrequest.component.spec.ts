import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolAccessRequestComponent } from './tool-accessrequest.component';

describe('ToolAccessRequestComponent', () => {
  let component: ToolAccessRequestComponent;
  let fixture: ComponentFixture<ToolAccessRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolAccessRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolAccessRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
