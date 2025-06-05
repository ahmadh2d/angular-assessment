import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-patient-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css',
})
export class PatientFormComponent {
  patientForm: FormGroup;

  statusOptions = [
    { value: 'luonnos', label: 'Luonnos' },
    { value: 'valmis', label: 'Valmis' },
    { value: 'hyvaksytty', label: 'Hyväksytty' },
  ];

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      patientName: [''],
      birthDate: [''],
      socialSecurityNumber: [''],
      eventType: [''],
      visitReason: [''],
      status: ['luonnos'],
      doctor: [{ value: 'Tuomas Veikko Kerola', disabled: true }],
      appointmentDateTime: ['29/10/2024 14:49'],
      additionalNotes: [''],
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.patientForm.value);
    // Handle form submission
  }

  onCancel() {
    this.patientForm.reset();
    console.log('Form cancelled');
  }
}
