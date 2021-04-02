import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwFormComponent } from './bmw-form.component';

describe('BmwFormComponent', () => {
  let component: BmwFormComponent;
  let fixture: ComponentFixture<BmwFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
