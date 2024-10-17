import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencopersoneComponent } from './elencopersone.component';

describe('ElencopersoneComponent', () => {
  let component: ElencopersoneComponent;
  let fixture: ComponentFixture<ElencopersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencopersoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencopersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
