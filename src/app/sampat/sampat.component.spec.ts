import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampatComponent } from './sampat.component';

describe('SampatComponent', () => {
  let component: SampatComponent;
  let fixture: ComponentFixture<SampatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
