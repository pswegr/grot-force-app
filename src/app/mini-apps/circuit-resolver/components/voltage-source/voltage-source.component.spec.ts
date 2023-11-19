import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltageSourceComponent } from './voltage-source.component';

describe('VoltageSourceComponent', () => {
  let component: VoltageSourceComponent;
  let fixture: ComponentFixture<VoltageSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoltageSourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoltageSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
