import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioRegistrazioneComponent } from './esercizio-registrazione.component';

describe('EsercizioRegistrazioneComponent', () => {
  let component: EsercizioRegistrazioneComponent;
  let fixture: ComponentFixture<EsercizioRegistrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsercizioRegistrazioneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EsercizioRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
