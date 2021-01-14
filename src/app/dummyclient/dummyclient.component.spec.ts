import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyclientComponent } from './dummyclient.component';

describe('DummyclientComponent', () => {
  let component: DummyclientComponent;
  let fixture: ComponentFixture<DummyclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
