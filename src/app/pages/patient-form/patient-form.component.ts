import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-patient-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
  ],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent {
  patientForm: FormGroup;

  eventTypes = [
    { value: 'konsultaatio', label: 'Konsultaatio' },
    { value: 'rutiinitarkastus', label: 'Rutiinitarkastus' },
    { value: 'seuranta', label: 'Seuranta' },
    { value: 'kiireellinen', label: 'Kiireellinen' },
  ];

  statusOptions = [
    { value: 'luonnos', label: 'Luonnos' },
    { value: 'valmis', label: 'Valmis' },
    { value: 'hyvaksytty', label: 'Hyväksytty' },
  ];

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      patientName: ['', Validators.required],
      birthDate: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      eventType: ['', Validators.required],
      visitReason: ['', Validators.required],
      status: ['luonnos', Validators.required],
      doctor: ['Tuomas Veikko Kerola', Validators.required],
      appointmentDateTime: ['', Validators.required],
      additionalNotes: [''],
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      console.log('Form submitted:', this.patientForm.value);
      // Handle form submission
    } else {
      console.log('Form is invalid');
      // Handle validation errors
    }
  }

  onCancel() {
    this.patientForm.reset();
    console.log('Form cancelled');
  }
}
