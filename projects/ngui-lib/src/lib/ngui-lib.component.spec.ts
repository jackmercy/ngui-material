import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguiLibComponent } from './ngui-lib.component';

describe('NguiLibComponent', () => {
  let component: NguiLibComponent;
  let fixture: ComponentFixture<NguiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
