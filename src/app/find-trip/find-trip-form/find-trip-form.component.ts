import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'af-find-trip-form',
  templateUrl: './find-trip-form.component.html'
})
export class FindTripFormComponent {
  submitted = false;
  readonly bookingCodeRegex = /^(?:[02-9]+[a-z]|[a-z]+[02-9])[a-z02-9]+$/i;
  readonly lastNameRegex = /^[a-z]+$/i;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  bookingForm = this.fb.group({
    // tslint:disable-next-line:max-line-length
    bookingCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern(this.bookingCodeRegex)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(this.lastNameRegex)]],
  });

  onSubmit() {
    this.submitted = true;
    // If invalid don't proceed
    if (this.bookingForm.invalid) { return false; }
    // Navigate to summary
    this.router.navigate([this.bookingForm.value.bookingCode], { relativeTo: this.route });
  }
}
