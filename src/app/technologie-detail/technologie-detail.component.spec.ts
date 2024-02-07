import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieDetailComponent } from './technologie-detail.component';

describe('TechnologieDetailComponent', () => {
  let component: TechnologieDetailComponent;
  let fixture: ComponentFixture<TechnologieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologieDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
