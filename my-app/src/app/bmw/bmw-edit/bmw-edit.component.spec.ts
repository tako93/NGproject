import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwEditComponent } from './bmw-edit.component';

describe('BmwEditComponent', () => {
  let component: BmwEditComponent;
  let fixture: ComponentFixture<BmwEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
