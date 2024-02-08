import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCatalogueComponent } from './latest-catalogue.component';

describe('LatestCatalogueComponent', () => {
  let component: LatestCatalogueComponent;
  let fixture: ComponentFixture<LatestCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestCatalogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
