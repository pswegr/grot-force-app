import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitResolverComponent } from './circuit-resolver.component';

describe('CircuitResolverComponent', () => {
  let component: CircuitResolverComponent;
  let fixture: ComponentFixture<CircuitResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircuitResolverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircuitResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
