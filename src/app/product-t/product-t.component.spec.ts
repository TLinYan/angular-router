import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTComponent } from './product-t.component';

describe('ProductTComponent', () => {
  let component: ProductTComponent;
  let fixture: ComponentFixture<ProductTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
