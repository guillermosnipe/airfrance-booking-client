import { Component, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FocusOnErrorDirective } from '../directives/focus-error.directive';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'af-find-trip-form',
  templateUrl: './find-trip-form.component.html'
})
export class FindTripFormComponent implements OnInit, OnDestroy {
  readonly bookingCodeRegex = /^(?:[02-9]+[a-z]|[a-z]+[02-9])[a-z02-9]+$/i;
  readonly lastNameRegex = /^[a-z]+$/i;
  errors: Subscription;
  serverErrors: string;
  bookingForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChildren(FocusOnErrorDirective)
  fields: QueryList<FocusOnErrorDirective>;
  check() {
    const fields = this.fields.toArray();
    for (const field of fields) {
      if (field.invalid) {
        field.focus();
        break;
      }
    }
  }

  ngOnInit(): void {

    this.errors = this.route.queryParams.subscribe(params => this.serverErrors = params.serverErrors);

    this.bookingForm = this.fb.group({
      // tslint:disable-next-line:max-line-length
      bookingCode: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(6),
          Validators.pattern(this.bookingCodeRegex)
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(this.lastNameRegex)
        ]
      ]
    });
  }

  onSubmit() {
    this.submitted = true;
    // If invalid don't proceed
    if (this.bookingForm.invalid) {
      this.check(); // Focus invalid inputs
      return false;
    }
    // Navigate to summary
    this.router.navigate([this.bookingForm.value.bookingCode], {
      relativeTo: this.route
    });
  }

  ngOnDestroy(): void {
    this.errors.unsubscribe();
  }
}
