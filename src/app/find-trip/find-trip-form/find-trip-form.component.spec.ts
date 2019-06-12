import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FindTripFormComponent } from './find-trip-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

describe('Find Trip Form', () => {
  let component: FindTripFormComponent;
  let fixture: ComponentFixture<FindTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripFormComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule,NgbTooltipModule]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create the form', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('should be invalid when wrong credentials are entered', () => {
    const form = fixture.nativeElement;
    const bookingCodeInput = form.querySelector('#bookingCode');
    const lastNameInput = form.querySelector('#lastName');

    fixture.detectChanges();

    bookingCodeInput.value = 'ADF212';
    bookingCodeInput.dispatchEvent(new Event('input'));
    lastNameInput.value = 'Snipe';
    lastNameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.formSubmitted.subscribe( ({ bookingCode, lastName}) => {
      expect(bookingCode).toEqual('ADF212');
      expect(lastName).toEqual('Snipe');
    });

    form.querySelector('button[type="submit"]').click();
    expect(component.bookingForm.valid).toBeFalsy();
  });

  it('should send credentials when submit button is pressed', () => {
    const form = fixture.nativeElement;
    const bookingCodeInput = form.querySelector('#bookingCode');
    const lastNameInput = form.querySelector('#lastName');

    fixture.detectChanges();

    bookingCodeInput.value = 'ADF234';
    bookingCodeInput.dispatchEvent(new Event('input'));
    lastNameInput.value = 'Snipe';
    lastNameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.formSubmitted.subscribe( ({ bookingCode, lastName}) => {
      expect(bookingCode).toEqual('ADF234');
      expect(lastName).toEqual('Snipe');
    });

    form.querySelector('button[type="submit"]').click();
  });
});
