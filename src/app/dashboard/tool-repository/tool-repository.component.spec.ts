import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolRepositoryComponent } from './tool-repository.component';

describe('ToolRepositoryComponent', () => {
  let component: ToolRepositoryComponent;
  let fixture: ComponentFixture<ToolRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
