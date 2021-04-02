import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwAddComponent } from './bmw-add.component';

describe('BmwAddComponent', () => {
  let component: BmwAddComponent;
  let fixture: ComponentFixture<BmwAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmwAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
