import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOComponent } from './product-o.component';

describe('ProductOComponent', () => {
  let component: ProductOComponent;
  let fixture: ComponentFixture<ProductOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
