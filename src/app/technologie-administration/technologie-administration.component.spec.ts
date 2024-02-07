import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieAdministrationComponent } from './technologie-administration.component';

describe('TechnologieAdministrationComponent', () => {
  let component: TechnologieAdministrationComponent;
  let fixture: ComponentFixture<TechnologieAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologieAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologieAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
