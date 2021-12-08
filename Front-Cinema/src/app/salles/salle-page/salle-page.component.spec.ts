import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallePageComponent } from './salle-page.component';

describe('SallePageComponent', () => {
  let component: SallePageComponent;
  let fixture: ComponentFixture<SallePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
