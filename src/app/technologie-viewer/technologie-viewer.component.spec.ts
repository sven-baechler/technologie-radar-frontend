import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieViewerComponent } from './technologie-viewer.component';

describe('TechnologieViewerComponent', () => {
  let component: TechnologieViewerComponent;
  let fixture: ComponentFixture<TechnologieViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologieViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologieViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
