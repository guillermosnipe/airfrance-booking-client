import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FindTripFormComponent } from './find-trip-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

describe('FindTripFormComponent', () => {
  let component: FindTripFormComponent;
  let fixture: ComponentFixture<FindTripFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripFormComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule,NgbTooltipModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Add ngbtooltip
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
