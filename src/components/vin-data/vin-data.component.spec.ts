import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinDataComponent } from './vin-data.component';

describe('VinDataComponent', () => {
  let component: VinDataComponent;
  let fixture: ComponentFixture<VinDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
