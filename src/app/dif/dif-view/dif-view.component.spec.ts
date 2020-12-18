import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifViewComponent } from './dif-view.component';

describe('DifViewComponent', () => {
  let component: DifViewComponent;
  let fixture: ComponentFixture<DifViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
