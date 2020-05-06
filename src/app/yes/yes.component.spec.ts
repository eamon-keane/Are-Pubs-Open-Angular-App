import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesComponent } from './yes.component';

describe('YesComponent', () => {
  let component: YesComponent;
  let fixture: ComponentFixture<YesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
